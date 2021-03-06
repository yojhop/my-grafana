import { Task, TaskRunner } from './task';
import GithubClient from '../utils/githubClient';

interface CloseMilestoneOptions {
  milestone: string;
}

const closeMilestoneTaskRunner: TaskRunner<CloseMilestoneOptions> = async ({ milestone }) => {
  const githubClient = new GithubClient({ required: true });

  const cherryPickLabel = 'cherry-pick needed';
  const client = githubClient.client;

  if (!/^\d+$/.test(milestone)) {
    console.log('Use milestone number not title, find number in milestone url');
    return;
  }

  const milestoneRes = await client.get(`/milestones/${milestone}`, {});

  const milestoneState = milestoneRes.data.state;

  if (milestoneState === 'closed') {
    console.log('milestone already closed. β');
    return;
  }

  console.log('fetching issues/PRs of the milestone β¬');

  // Get all the issues/PRs with the label cherry-pick
  // Every pull request is actually an issue
  const issuesRes = await client.get('/issues', {
    params: {
      state: 'closed',
      labels: cherryPickLabel,
      per_page: 100,
      milestone: milestone,
    },
  });

  if (issuesRes.data.length < 1) {
    console.log('no issues to remove label from');
  } else {
    console.log(`found ${issuesRes.data.length} issues to remove the cherry-pick label from π`);
  }

  for (const issue of issuesRes.data) {
    // the reason for using stdout.write is for achieving 'action -> result' on
    // the same line
    process.stdout.write(`π§removing label from issue #${issue.number} π...`);
    const resDelete = await client.delete(`/issues/${issue.number}/labels/${cherryPickLabel}`, {});
    if (resDelete.status === 200) {
      process.stdout.write('done β\n');
    } else {
      console.log('failed β');
    }
  }

  console.log(`cleaned up ${issuesRes.data.length} issues/prs β‘οΈ`);

  const resClose = await client.patch(`/milestones/${milestone}`, {
    state: 'closed',
  });

  if (resClose.status === 200) {
    console.log('milestone closed π');
  } else {
    console.log('failed to close the milestone, response:');
    console.log(resClose);
  }
};

export const closeMilestoneTask = new Task<CloseMilestoneOptions>(
  'Close Milestone generator task',
  closeMilestoneTaskRunner
);
