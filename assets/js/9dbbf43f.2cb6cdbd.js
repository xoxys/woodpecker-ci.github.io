"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[7737],{54606:t=>{t.exports=JSON.parse('{"name":"Woodpecker Email","url":"https://gitnet.fr/deblan/woodpecker-email","icon":"https://gitnet.fr/deblan/woodpecker-email/raw/branch/develop/logo.svg","description":"plugin to send build status notifications via Email.","docs":"<h2>Settings</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>Settings Name</th>\\n<th>Required</th>\\n<th>Type</th>\\n<th>Description</th>\\n<th>Documentation</th>\\n</tr>\\n</thead>\\n<tbody><tr>\\n<td>dsn</td>\\n<td>yes</td>\\n<td><code>string</code></td>\\n<td>Mail transport configuration</td>\\n<td><a href=\\"https://symfony.com/doc/current/mailer.html#tls-peer-verification\\">Documentation</a></td>\\n</tr>\\n<tr>\\n<td>from.address</td>\\n<td>yes</td>\\n<td><code>string</code></td>\\n<td>Email address of the sender</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>from.name</td>\\n<td>no</td>\\n<td><code>string</code></td>\\n<td>Name of the sender</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>recipients</td>\\n<td>no</td>\\n<td><code>string</code> or <code>list</code></td>\\n<td>List of recipients to send this mail to (besides the commit author)</td>\\n<td>YAML list or comma separated list</td>\\n</tr>\\n<tr>\\n<td>recipients_only</td>\\n<td>no</td>\\n<td><code>boolean</code></td>\\n<td>Exclude the committer</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>content.subject</td>\\n<td>no</td>\\n<td><code>string</code></td>\\n<td>Define the email subject template</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>content.body</td>\\n<td>no</td>\\n<td><code>string</code></td>\\n<td>Define the email body template</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>attachments</td>\\n<td>no</td>\\n<td><code>string</code> or <code>list</code></td>\\n<td>List of files to attach</td>\\n<td>YAML list or comma separated list</td>\\n</tr>\\n<tr>\\n<td>debug</td>\\n<td>no</td>\\n<td><code>boolean</code></td>\\n<td>Debug mode (email are sent!)</td>\\n<td></td>\\n</tr>\\n</tbody></table>\\n<h3>Example</h3>\\n<pre><code>steps:\\n  mail:\\n    image: deblan/woodpecker-email-php\\n    settings:\\n      dsn: \\"smtp://username:password@mail.example.com:587?verify_peer=1\\"\\n      from:\\n        address: \\"woodpecker@example.com\\"\\n        name: \\"Woodpecker\\"\\n      evaluate: \\"build.status == \'failure\' or prev_pipeline.status == \'failure\'\\"\\n      recipients:\\n        - dev1@example.com\\n        - dev2@example.com\\n      recipients_only: false\\n      content:\\n        subject: \\"[{{ pipeline.status }}] {{ repo.full_name }} ({{ commit.branch }} - {{ commit.sha[0:8] }}\\"\\n        body: |\\n          {{ commit.sha }}&lt;br&gt;\\n          {{ pipeline.status }}&lt;br&gt;\\n          {{ commit.author_email }}&lt;br&gt;\\n      attachments:\\n        - log/*\\n</code></pre>\\n<h3>Evaluation and content</h3>\\n<p>See the <a href=\\"https://twig.symfony.com/doc/3.x/\\">Twig documentation</a>.</p>\\n<table>\\n<thead>\\n<tr>\\n<th>Variable</th>\\n<th>Value</th>\\n</tr>\\n</thead>\\n<tbody><tr>\\n<td><code>workspace</code></td>\\n<td><code>CI_WORKSPACE</code></td>\\n</tr>\\n<tr>\\n<td><code>repo.full_name</code></td>\\n<td><code>CI_REPO</code></td>\\n</tr>\\n<tr>\\n<td><code>repo.owner</code></td>\\n<td><code>CI_REPO_OWNER</code></td>\\n</tr>\\n<tr>\\n<td><code>repo.name</code></td>\\n<td><code>CI_REPO_NAME</code></td>\\n</tr>\\n<tr>\\n<td><code>repo.url</code></td>\\n<td><code>CI_REPO_URL</code></td>\\n</tr>\\n<tr>\\n<td><code>commit.sha</code></td>\\n<td><code>CI_COMMIT_SHA</code></td>\\n</tr>\\n<tr>\\n<td><code>commit.ref</code></td>\\n<td><code>CI_COMMIT_REF</code></td>\\n</tr>\\n<tr>\\n<td><code>commit.branch</code></td>\\n<td><code>CI_COMMIT_BRANCH</code></td>\\n</tr>\\n<tr>\\n<td><code>commit.source_branch</code></td>\\n<td><code>CI_COMMIT_SOURCE_BRANCH</code></td>\\n</tr>\\n<tr>\\n<td><code>commit.target_branch</code></td>\\n<td><code>CI_COMMIT_TARGET_BRANCH</code></td>\\n</tr>\\n<tr>\\n<td><code>commit.tag</code></td>\\n<td><code>CI_COMMIT_TAG</code></td>\\n</tr>\\n<tr>\\n<td><code>commit.pull_request</code></td>\\n<td><code>CI_COMMIT_PULL_REQUEST</code></td>\\n</tr>\\n<tr>\\n<td><code>commit.pull_request_labels</code></td>\\n<td><code>CI_COMMIT_PULL_REQUEST_LABELS</code></td>\\n</tr>\\n<tr>\\n<td><code>commit.message</code></td>\\n<td><code>CI_COMMIT_MESSAGE</code></td>\\n</tr>\\n<tr>\\n<td><code>commit.author</code></td>\\n<td><code>CI_COMMIT_AUTHOR</code></td>\\n</tr>\\n<tr>\\n<td><code>commit.author_email</code></td>\\n<td><code>CI_COMMIT_AUTHOR_EMAIL</code></td>\\n</tr>\\n<tr>\\n<td><code>commit.author_avatar</code></td>\\n<td><code>CI_COMMIT_AUTHOR_AVATAR</code></td>\\n</tr>\\n<tr>\\n<td><code>commit.prerelease</code></td>\\n<td><code>CI_COMMIT_PRERELEASE</code></td>\\n</tr>\\n<tr>\\n<td><code>prev_commit.sha</code></td>\\n<td><code>CI_PREV_COMMIT_SHA</code></td>\\n</tr>\\n<tr>\\n<td><code>prev_commit.ref</code></td>\\n<td><code>CI_PREV_COMMIT_REF</code></td>\\n</tr>\\n<tr>\\n<td><code>prev_commit.branch</code></td>\\n<td><code>CI_PREV_COMMIT_BRANCH</code></td>\\n</tr>\\n<tr>\\n<td><code>prev_commit.source_branch</code></td>\\n<td><code>CI_PREV_COMMIT_SOURCE_BRANCH</code></td>\\n</tr>\\n<tr>\\n<td><code>prev_commit.target_branch</code></td>\\n<td><code>CI_PREV_COMMIT_TARGET_BRANCH</code></td>\\n</tr>\\n<tr>\\n<td><code>prev_commit.message</code></td>\\n<td><code>CI_PREV_COMMIT_MESSAGE</code></td>\\n</tr>\\n<tr>\\n<td><code>prev_commit.author</code></td>\\n<td><code>CI_PREV_COMMIT_AUTHOR</code></td>\\n</tr>\\n<tr>\\n<td><code>prev_commit.author_email</code></td>\\n<td><code>CI_PREV_COMMIT_AUTHOR_EMAIL</code></td>\\n</tr>\\n<tr>\\n<td><code>prev_commit.author_avatar</code></td>\\n<td><code>CI_PREV_COMMIT_AUTHOR_AVATAR</code></td>\\n</tr>\\n<tr>\\n<td><code>prev_commit.url</code></td>\\n<td><code>CI_PREV_COMMIT_URL</code></td>\\n</tr>\\n<tr>\\n<td><code>pipeline.number</code></td>\\n<td><code>CI_PIPELINE_NUMBER</code></td>\\n</tr>\\n<tr>\\n<td><code>pipeline.parent</code></td>\\n<td><code>CI_PIPELINE_PARENT</code></td>\\n</tr>\\n<tr>\\n<td><code>pipeline.event</code></td>\\n<td><code>CI_PIPELINE_EVENT</code></td>\\n</tr>\\n<tr>\\n<td><code>pipeline.url</code></td>\\n<td><code>CI_PIPELINE_URL</code></td>\\n</tr>\\n<tr>\\n<td><code>pipeline.deploy_target</code></td>\\n<td><code>CI_PIPELINE_DEPLOY_TARGET</code></td>\\n</tr>\\n<tr>\\n<td><code>pipeline.status</code></td>\\n<td><code>CI_PIPELINE_STATUS</code></td>\\n</tr>\\n<tr>\\n<td><code>pipeline.created_at</code></td>\\n<td><code>CI_PIPELINE_CREATED</code></td>\\n</tr>\\n<tr>\\n<td><code>pipeline.stared_at</code></td>\\n<td><code>CI_PIPELINE_STARTED</code></td>\\n</tr>\\n<tr>\\n<td><code>pipeline.finished_at</code></td>\\n<td><code>CI_PIPELINE_FINISHED</code></td>\\n</tr>\\n<tr>\\n<td><code>prev_pipeline.number</code></td>\\n<td><code>CI_PREV_PIPELINE_NUMBER</code></td>\\n</tr>\\n<tr>\\n<td><code>prev_pipeline.parent</code></td>\\n<td><code>CI_PREV_PIPELINE_PARENT</code></td>\\n</tr>\\n<tr>\\n<td><code>prev_pipeline.event</code></td>\\n<td><code>CI_PREV_PIPELINE_EVENT</code></td>\\n</tr>\\n<tr>\\n<td><code>prev_pipeline.url</code></td>\\n<td><code>CI_PREV_PIPELINE_URL</code></td>\\n</tr>\\n<tr>\\n<td><code>prev_pipeline.deploy_target</code></td>\\n<td><code>CI_PREV_PIPELINE_DEPLOY_TARGET</code></td>\\n</tr>\\n<tr>\\n<td><code>prev_pipeline.status</code></td>\\n<td><code>CI_PREV_PIPELINE_STATUS</code></td>\\n</tr>\\n<tr>\\n<td><code>prev_pipeline.created_at</code></td>\\n<td><code>CI_PREV_PIPELINE_CREATED</code></td>\\n</tr>\\n<tr>\\n<td><code>prev_pipeline.stared_at</code></td>\\n<td><code>CI_PREV_PIPELINE_STARTED</code></td>\\n</tr>\\n<tr>\\n<td><code>prev_pipeline.finished_at</code></td>\\n<td><code>CI_PREV_PIPELINE_FINISHED</code></td>\\n</tr>\\n<tr>\\n<td><code>workflow.name</code></td>\\n<td><code>WORKFLOW_NAME</code></td>\\n</tr>\\n<tr>\\n<td><code>step.name</code></td>\\n<td><code>CI_STEP_NAME</code></td>\\n</tr>\\n<tr>\\n<td><code>step.number</code></td>\\n<td><code>CI_STEP_NUMBER</code></td>\\n</tr>\\n<tr>\\n<td><code>step.status</code></td>\\n<td><code>CI_STEP_STATUS</code></td>\\n</tr>\\n<tr>\\n<td><code>step.start_at</code></td>\\n<td><code>CI_STEP_STARTED</code></td>\\n</tr>\\n<tr>\\n<td><code>step.finished_at</code></td>\\n<td><code>CI_STEP_FINISHED</code></td>\\n</tr>\\n<tr>\\n<td><code>step.url</code></td>\\n<td><code>CI_STEP_URL</code></td>\\n</tr>\\n</tbody></table>\\n","tags":["notifications","email"],"author":"Simon Vieille","containerImage":"deblan/woodpecker-email","containerImageUrl":"https://hub.docker.com/r/deblan/woodpecker-email","verified":false}')}}]);