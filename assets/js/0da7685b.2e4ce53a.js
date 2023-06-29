"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[255],{2984:e=>{e.exports=JSON.parse('{"name":"Woodpecker Email","url":"https://gitnet.fr/deblan/woodpecker-email","icon":"https://gitnet.fr/deblan/woodpecker-email/raw/branch/develop/logo.svg","description":"plugin to send build status notifications via Email.","docs":"<p>Use the Email plugin for sending build status notifications via email.</p>\\n<h2 id=\\"config\\">Config</h2>\\n<p>You can configure the plugin using the following parameters:</p>\\n<ul>\\n<li><strong>from.address</strong> - Send notifications from this address</li>\\n<li><strong>from.name</strong> - Notifications sender name</li>\\n<li><strong>host</strong> - SMTP server host</li>\\n<li><strong>port</strong> - SMTP server port, defaults to <code>587</code></li>\\n<li><strong>username</strong> - SMTP username</li>\\n<li><strong>password</strong> - SMTP password</li>\\n<li><strong>skip_verify</strong> - Skip verification of SSL certificates, defaults to <code>false</code></li>\\n<li><strong>no_starttls</strong> - Enable/Disable STARTTLS</li>\\n<li><strong>recipients</strong> - List of recipients to send this mail to (besides the commit author)</li>\\n<li><strong>recipients_file</strong> - Filename to load additional recipients from (textfile with one email per line) (besides the commit author)</li>\\n<li><strong>recipients_only</strong> - Do not send mails to the commit author, but only to <strong>recipients</strong>, defaults to <code>false</code></li>\\n<li><strong>subject</strong> - The subject line template</li>\\n<li><strong>body</strong> - The email body template</li>\\n<li><strong>attachment</strong> - An optional file to attach to the sent mail(s), can be an absolute path or relative to the working directory.</li>\\n<li><strong>evaluate</strong> - An optional expression to evaluate (on the fly) whether the mail should be sent or not (<a href=\\"https://woodpecker-ci.org/docs/next/usage/pipeline-syntax#evaluate\\">https://woodpecker-ci.org/docs/next/usage/pipeline-syntax#evaluate</a>).</li>\\n</ul>\\n<h2 id=\\"example\\">Example</h2>\\n<p>The following is a sample configuration in your .woodpecker.yml file:</p>\\n<pre><code class=\\"language-yaml\\">pipeline:\\n  mail:\\n    image: deblan/woodpecker-email\\n    settings:\\n      from.address: noreply@github.com\\n      from.name: John Smith\\n      host: smtp.mailgun.org\\n      username: octocat\\n      password: 12345\\n      recipients:\\n        - octocat@github.com\\n</code></pre>\\n<h3 id=\\"secrets\\">Secrets</h3>\\n<p>The Email plugin supports reading credentials and other parameters from the Drone secret store. This is strongly recommended instead of storing credentials in the pipeline configuration in plain text.</p>\\n<pre><code class=\\"language-diff\\">pipeline:\\n  mail:\\n    image: deblan/woodpecker-email\\n    settings:\\n      from.address: noreply@github.com\\n      host: smtp.mailgun.org\\n+     username:\\n+       from_secret: email_username\\n+     password: 12345\\n+       from_secret: email_password\\n      recipients:\\n        - octocat@github.com\\n</code></pre>\\n<h3 id=\\"evaluation\\">Evaluation</h3>\\n<p>This plugin introduces an optional expression to evaluate (on the fly) whether the mail should be sent or not.</p>\\n<pre><code class=\\"language-diff\\">pipeline:\\n  mail:\\n    image: deblan/woodpecker-email\\n    settings:\\n      ...\\n    when:\\n      - evaluate: &#39;CI_STEP_STATUS == &quot;failure&quot; || CI_PREV_PIPELINE_STATUS == &quot;failure&quot;&#39;\\n</code></pre>\\n<p>The problem is that the expression is evaluated before the pipeline is generated. In this case, <code>CI_STEP_STATUS</code> does not exist yet and the mail step is ignored unless the previous pipeline failed.</p>\\n<pre><code class=\\"language-diff\\">pipeline:\\n  mail:\\n    image: deblan/woodpecker-email\\n    settings:\\n      ...\\n+     evaluate: &#39;CI_STEP_STATUS == &quot;failure&quot; || CI_PREV_PIPELINE_STATUS == &quot;failure&quot;&#39;\\n    when:\\n-     - evaluate: &#39;CI_STEP_STATUS == &quot;failure&quot; || CI_PREV_PIPELINE_STATUS == &quot;failure&quot;&#39;\\n</code></pre>\\n<p>More information about the syntaxe on (<a href=\\"https://woodpecker-ci.org/docs/next/usage/pipeline-syntax#evaluate\\">https://woodpecker-ci.org/docs/next/usage/pipeline-syntax#evaluate</a>).</p>\\n<h3 id=\\"custom-templates\\">Custom Templates</h3>\\n<p>In some cases you may want to customize the look and feel of the email message\\nso you can use custom templates. For the use case we expose the following\\nadditional parameters, all of the accept a custom handlebars template, directly\\nprovided as a string or as a remote URL which gets fetched and parsed:</p>\\n<ul>\\n<li><strong>subject</strong> - A handlebars template to create a custom subject. For more\\ndetails take a look at the <a href=\\"http://handlebarsjs.com/\\">docs</a>. You can see the\\ndefault template <a href=\\"https://github.com/Drillster/drone-email/blob/master/defaults.go#L14\\">here</a></li>\\n<li><strong>body</strong> - A handlebars template to create a custom template. For more\\ndetails take a look at the <a href=\\"http://handlebarsjs.com/\\">docs</a>. You can see the\\ndefault template <a href=\\"https://github.com/Drillster/drone-email/blob/master/defaults.go#L19-L267\\">here</a></li>\\n</ul>\\n<p>Example configuration that generate a custom email:</p>\\n<pre><code class=\\"language-yaml\\">pipeline:\\n  mail:\\n    image: deblan/woodpecker-email\\n    settings:\\n      from.address: noreply@github.com\\n      host: smtp.mailgun.org\\n      username: octocat\\n      password: 12345\\n      subject: &gt;\\n        [{{ build.status }}]\\n        {{ repo.owner }}/{{ repo.name }}\\n        ({{ build.branch }} - {{ truncate build.commit 8 }})\\n      body:\\n        https://git.io/vgvPz\\n</code></pre>\\n<h3 id=\\"skip-ssl-verify\\">Skip SSL verify</h3>\\n<p>In some cases you may want to skip SSL verification, even if we discourage that\\nas it leads to an unsecure environment. Please use this option only within your\\nintranet and/or with truested resources. For this use case we expose the\\nfollowing additional parameter:</p>\\n<ul>\\n<li><strong>skip_verify</strong> - Skip verification of SSL certificates</li>\\n</ul>\\n<p>Example configuration that skips SSL verification:</p>\\n<pre><code class=\\"language-diff\\">pipeline:\\n  mail:\\n    image: deblan/woodpecker-email\\n    settings:\\n      from: noreply@github.com\\n      host: smtp.mailgun.org\\n      username: octocat\\n      password: 12345\\n+     skip_verify: true\\n</code></pre>\\n<h3 id=\\"starttls\\">STARTTLS</h3>\\n<p>By default, STARTTLS is being used opportunistically meaning, if advertised\\nby the server, traffic is going to be encrypted.</p>\\n<p>You may want to disable STARTTLS, e.g., with faulty and/or internal servers:</p>\\n<pre><code class=\\"language-diff\\">pipeline:\\n  mail:\\n    image: deblan/woodpecker-email\\n    settings:\\n      from: noreply@github.com\\n      host: smtp.mailgun.org\\n      username: octocat\\n      password: 12345\\n+     no_starttls: true\\n</code></pre>\\n","tags":["notifications","email"],"containerImage":"deblan/woodpecker-email","containerImageUrl":"https://hub.docker.com/r/deblan/woodpecker-email","verified":false}')}}]);