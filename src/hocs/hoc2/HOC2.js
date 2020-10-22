
import React from 'react';
import List from './List';
import WithLoading from './WithdLoading';

// WrapperComponent is List

// HOC is WithLoading

// ListWithLoading is a var..


const ListWithLoading = WithLoading(List);


class HOC2 extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {

            loading:true,
            repos:[],
        };
        // this.handleClick = this.handleClick.bind(this);
    }


    componentDidMount() {
        // not need below line here
        // this.setState({ loading: true });
        fetch(`https://api.github.com/users/hacktivist123/repos`)
            .then((json) => json.json())
            .then((repos) => {
                this.setState({
                    loading: false,
                    repos: repos
                });
            });
    }
    render() {
        return (
            <ListWithLoading
                isLoading={this.state.loading}
                repos={this.state.repos}
            />
        );
    }
}
// export default App;


export default HOC2;

// https://api.github.com/users/hacktivist123/repos

/*
```json
    
    [
  {
    "id": 111079785,
    "node_id": "MDEwOlJlcG9zaXRvcnkxMTEwNzk3ODU=",
    "name": "Akintayoshedrack.me",
    "full_name": "hacktivist123/Akintayoshedrack.me",
    "private": false,
    "owner": {
      "login": "hacktivist123",
      "id": 26572907,
      "node_id": "MDQ6VXNlcjI2NTcyOTA3",
      "avatar_url": "https://avatars3.githubusercontent.com/u/26572907?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/hacktivist123",
      "html_url": "https://github.com/hacktivist123",
      "followers_url": "https://api.github.com/users/hacktivist123/followers",
      "following_url": "https://api.github.com/users/hacktivist123/following{/other_user}",
      "gists_url": "https://api.github.com/users/hacktivist123/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/hacktivist123/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/hacktivist123/subscriptions",
      "organizations_url": "https://api.github.com/users/hacktivist123/orgs",
      "repos_url": "https://api.github.com/users/hacktivist123/repos",
      "events_url": "https://api.github.com/users/hacktivist123/events{/privacy}",
      "received_events_url": "https://api.github.com/users/hacktivist123/received_events",
      "type": "User",
      "site_admin": false
    },
    "html_url": "https://github.com/hacktivist123/Akintayoshedrack.me",
    "description": "Cardstyle Contact Card with image",
    "fork": false,
    "url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me",
    "forks_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/forks",
    "keys_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/teams",
    "hooks_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/hooks",
    "issue_events_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/issues/events{/number}",
    "events_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/events",
    "assignees_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/assignees{/user}",
    "branches_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/branches{/branch}",
    "tags_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/tags",
    "blobs_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/languages",
    "stargazers_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/stargazers",
    "contributors_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/contributors",
    "subscribers_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/subscribers",
    "subscription_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/subscription",
    "commits_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/contents/{+path}",
    "compare_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/merges",
    "archive_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/downloads",
    "issues_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/issues{/number}",
    "pulls_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/labels{/name}",
    "releases_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/releases{/id}",
    "deployments_url": "https://api.github.com/repos/hacktivist123/Akintayoshedrack.me/deployments",
    "created_at": "2017-11-17T08:43:29Z",
    "updated_at": "2019-03-02T10:36:23Z",
    "pushed_at": "2018-10-30T20:35:33Z",
    "git_url": "git://github.com/hacktivist123/Akintayoshedrack.me.git",
    "ssh_url": "git@github.com:hacktivist123/Akintayoshedrack.me.git",
    "clone_url": "https://github.com/hacktivist123/Akintayoshedrack.me.git",
    "svn_url": "https://github.com/hacktivist123/Akintayoshedrack.me",
    "homepage": "https://hacktivist123.github.io/Akintayoshedrack.me/",
    "size": 667,
    "stargazers_count": 2,
    "watchers_count": 2,
    "language": "CSS",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": true,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": {
      "key": "other",
      "name": "Other",
      "spdx_id": "NOASSERTION",
      "url": null,
      "node_id": "MDc6TGljZW5zZTA="
    },
    "forks": 0,
    "open_issues": 0,
    "watchers": 2,
    "default_branch": "master"
  },
  {
    "id": 126191710,
    "node_id": "MDEwOlJlcG9zaXRvcnkxMjYxOTE3MTA=",
    "name": "Algorithm-Challenges",
    "full_name": "hacktivist123/Algorithm-Challenges",
    "private": false,
    "owner": {
      "login": "hacktivist123",
      "id": 26572907,
      "node_id": "MDQ6VXNlcjI2NTcyOTA3",
      "avatar_url": "https://avatars3.githubusercontent.com/u/26572907?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/hacktivist123",
      "html_url": "https://github.com/hacktivist123",
      "followers_url": "https://api.github.com/users/hacktivist123/followers",
      "following_url": "https://api.github.com/users/hacktivist123/following{/other_user}",
      "gists_url": "https://api.github.com/users/hacktivist123/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/hacktivist123/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/hacktivist123/subscriptions",
      "organizations_url": "https://api.github.com/users/hacktivist123/orgs",
      "repos_url": "https://api.github.com/users/hacktivist123/repos",
      "events_url": "https://api.github.com/users/hacktivist123/events{/privacy}",
      "received_events_url": "https://api.github.com/users/hacktivist123/received_events",
      "type": "User",
      "site_admin": false
    },
    "html_url": "https://github.com/hacktivist123/Algorithm-Challenges",
    "description": "Collection of Algorithms and Solutions I have Solved",
    "fork": false,
    "url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges",
    "forks_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/forks",
    "keys_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/teams",
    "hooks_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/hooks",
    "issue_events_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/issues/events{/number}",
    "events_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/events",
    "assignees_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/assignees{/user}",
    "branches_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/branches{/branch}",
    "tags_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/tags",
    "blobs_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/languages",
    "stargazers_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/stargazers",
    "contributors_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/contributors",
    "subscribers_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/subscribers",
    "subscription_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/subscription",
    "commits_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/contents/{+path}",
    "compare_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/merges",
    "archive_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/downloads",
    "issues_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/issues{/number}",
    "pulls_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/labels{/name}",
    "releases_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/releases{/id}",
    "deployments_url": "https://api.github.com/repos/hacktivist123/Algorithm-Challenges/deployments",
    "created_at": "2018-03-21T14:30:44Z",
    "updated_at": "2019-08-15T15:38:39Z",
    "pushed_at": "2019-08-15T15:38:37Z",
    "git_url": "git://github.com/hacktivist123/Algorithm-Challenges.git",
    "ssh_url": "git@github.com:hacktivist123/Algorithm-Challenges.git",
    "clone_url": "https://github.com/hacktivist123/Algorithm-Challenges.git",
    "svn_url": "https://github.com/hacktivist123/Algorithm-Challenges",
    "homepage": "",
    "size": 11,
    "stargazers_count": 1,
    "watchers_count": 1,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": null,
    "forks": 0,
    "open_issues": 0,
    "watchers": 1,
    "default_branch": "master"
  },]
  
```
*/