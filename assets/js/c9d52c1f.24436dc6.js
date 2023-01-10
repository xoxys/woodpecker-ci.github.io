"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[4253],{9051:e=>{e.exports=JSON.parse('{"name":"Docker Buildx","url":"https://codeberg.org/woodpecker-plugins/docker-buildx","icon":"https://woodpecker-ci.org/img/logo.svg","description":"plugin to build multiarch Docker images with buildx","docs":"<p>Woodpecker CI plugin to build multiarch Docker images with buildx. This plugin is a fork of <a href=\\"https://github.com/thegeeklab/drone-docker-buildx/\\">thegeeklab/drone-docker-buildx</a> which itself is a fork of <a href=\\"https://github.com/drone-plugins/drone-docker\\">drone-plugins/drone-docker</a>. You can find the full documentation at You can find the full documentation at <a href=\\"https://woodpecker-plugins.codeberg.page/plugins/drone-docker-buildx\\">woodpecker-plugins.codeberg.page</a>.</p>\\n<h2 id=\\"features\\">Features</h2>\\n<ul>\\n<li>Build without push</li>\\n<li>Use custom registries</li>\\n<li>Build based on existing tags when needed</li>\\n<li>Push to multiple registries/repos</li>\\n</ul>\\n<p>It will automatically generate buildkit configuration to use custom CA certificate if following conditions are met:</p>\\n<ul>\\n<li>Setting <code>buildkit_config</code> is not set</li>\\n<li>Custom <code>registry</code>/<code>logins</code> value is provided</li>\\n<li>File exists <code>/etc/docker/certs.d/&lt;registry-value&gt;/ca.crt</code></li>\\n</ul>\\n<blockquote>\\n<p>NB! To mount custom CA you can use Woodpecker CI runner configuration environment <code>WOODPECKER_BACKEND_DOCKER_VOLUMES</code> with value <code>/etc/ssl/certs:/etc/ssl/certs:ro,/etc/docker/certs.d:/etc/docker/certs.d:ro</code>. And have created file <code>/etc/docker/certs.d/&lt;registry-value&gt;/ca.crt</code> with CA certificate on runner server host.</p>\\n</blockquote>\\n<h2 id=\\"settings\\">Settings</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>Settings Name</th>\\n<th>Default</th>\\n<th>Description</th>\\n</tr>\\n</thead>\\n<tbody><tr>\\n<td><code>dry-run</code></td>\\n<td><code>false</code></td>\\n<td>disables docker push</td>\\n</tr>\\n<tr>\\n<td><code>repo</code></td>\\n<td><em>none</em></td>\\n<td>sets repository name for the image (can be a list)</td>\\n</tr>\\n<tr>\\n<td><code>username</code></td>\\n<td><em>none</em></td>\\n<td>sets username to authenticates with</td>\\n</tr>\\n<tr>\\n<td><code>password</code></td>\\n<td><em>none</em></td>\\n<td>sets password / token to authenticates with</td>\\n</tr>\\n<tr>\\n<td><code>email</code></td>\\n<td><em>none</em></td>\\n<td>sets email address to authenticates with</td>\\n</tr>\\n<tr>\\n<td><code>registry</code></td>\\n<td><code>https://index.docker.io/v1/</code></td>\\n<td>sets docker registry to authenticate with</td>\\n</tr>\\n<tr>\\n<td><code>dockerfile</code></td>\\n<td><code>Dockerfile</code></td>\\n<td>sets dockerfile to use for the image build</td>\\n</tr>\\n<tr>\\n<td><code>tag</code>/<code>tags</code></td>\\n<td>@&quot;.tags&quot;</td>\\n<td>sets repository tags to use for the image</td>\\n</tr>\\n<tr>\\n<td><code>platforms</code></td>\\n<td><em>none</em></td>\\n<td>sets target platform for build</td>\\n</tr>\\n</tbody></table>\\n<h2 id=\\"auto_tag\\">auto_tag</h2>\\n<p>If set to true, it will use the <code>default_tag</code> (&quot;latest&quot;) on tag event or default branch.\\nIf it&#39;s a tag event it will also assume sem versioning and add tags accordingly (<code>x</code>, <code>x.x</code> and <code>x.x.x</code>).\\nIf it&#39;s not a tag event, and no default branch, automated tags are skipped.</p>\\n<h2 id=\\"examples\\">Examples</h2>\\n<pre><code class=\\"language-yml\\">  publish-next-agent:\\n    image: woodpeckerci/plugin-docker-buildx\\n    secrets: [docker_username, docker_password]\\n    settings:\\n      repo: woodpeckerci/woodpecker-agent\\n      dockerfile: docker/Dockerfile.agent.multiarch\\n      platforms: windows/amd64,darwin/amd64,darwin/arm64,freebsd/amd64,linux/amd64,linux/arm64/v8\\n      tag: next\\n    when:\\n      branch: ${CI_REPO_DEFAULT_BRANCH}\\n      event: push\\n</code></pre>\\n<pre><code class=\\"language-yml\\">  publish:\\n    image: woodpeckerci/plugin-docker-buildx\\n    settings:\\n      platforms: linux/386,linux/amd64,linux/arm/v6,linux/arm64/v8,linux/ppc64le,linux/riscv64,linux/s390x\\n      repo: codeberg.org/${CI_REPO_OWNER}/hello\\n      registry: codeberg.org\\n      tags: latest\\n      username: ${CI_REPO_OWNER}\\n      password:\\n        from_secret: cb_token\\n</code></pre>\\n<pre><code class=\\"language-yml\\">  docker-build:\\n    image: woodpeckerci/plugin-docker-buildx\\n    settings:\\n      repo: codeberg.org/${CI_REPO_OWNER}/hello\\n      registry: codeberg.org\\n      dry_run: true\\n      output: type=oci,dest=${CI_REPO_OWNER}-hello.tar\\n</code></pre>\\n<h2 id=\\"advanced-settings\\">Advanced Settings</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>Settings Name</th>\\n<th>Default</th>\\n<th>Description</th>\\n</tr>\\n</thead>\\n<tbody><tr>\\n<td><code>mirror</code></td>\\n<td><em>none</em></td>\\n<td>sets a registry mirror to pull images</td>\\n</tr>\\n<tr>\\n<td><code>storage_driver</code></td>\\n<td><em>none</em></td>\\n<td>sets the docker daemon storage driver</td>\\n</tr>\\n<tr>\\n<td><code>storage_path</code></td>\\n<td><code>/var/lib/docker</code></td>\\n<td>sets the docker daemon storage path</td>\\n</tr>\\n<tr>\\n<td><code>bip</code></td>\\n<td><em>none</em></td>\\n<td>allows the docker daemon to bride ip address</td>\\n</tr>\\n<tr>\\n<td><code>mtu</code></td>\\n<td><em>none</em></td>\\n<td>sets docker daemon custom mtu setting</td>\\n</tr>\\n<tr>\\n<td><code>custom_dns</code></td>\\n<td><em>none</em></td>\\n<td>sets custom docker daemon dns server</td>\\n</tr>\\n<tr>\\n<td><code>custom_dns_search</code></td>\\n<td><em>none</em></td>\\n<td>sets custom docker daemon dns search domain</td>\\n</tr>\\n<tr>\\n<td><code>insecure</code></td>\\n<td><code>false</code></td>\\n<td>allows the docker daemon to use insecure registries</td>\\n</tr>\\n<tr>\\n<td><code>ipv6</code></td>\\n<td><code>false</code></td>\\n<td>enables docker daemon IPv6 support</td>\\n</tr>\\n<tr>\\n<td><code>experimental</code></td>\\n<td><code>false</code></td>\\n<td>enables docker daemon experimental mode</td>\\n</tr>\\n<tr>\\n<td><code>debug</code></td>\\n<td><code>false</code></td>\\n<td>enables verbose debug mode for the docker daemon</td>\\n</tr>\\n<tr>\\n<td><code>daemon_off</code></td>\\n<td><code>false</code></td>\\n<td>disables the startup of the docker daemon</td>\\n</tr>\\n<tr>\\n<td><code>buildkit_config</code></td>\\n<td><em>none</em></td>\\n<td>sets content of the docker <a href=\\"https://github.com/moby/buildkit/blob/master/docs/buildkitd.toml.md\\">buildkit TOML config</a></td>\\n</tr>\\n<tr>\\n<td><code>context</code></td>\\n<td><code>.</code></td>\\n<td>sets the path of the build context to use</td>\\n</tr>\\n<tr>\\n<td><code>auto_tag</code></td>\\n<td><code>false</code></td>\\n<td>generates tag names automatically based on git branch and git tag, tags supplied via <code>tags</code> are additionally added to the auto_tags without suffix</td>\\n</tr>\\n<tr>\\n<td><code>default_suffix&quot;</code>/<code>auto_tag_suffix</code></td>\\n<td><em>none</em></td>\\n<td>generates tag names with the given suffix</td>\\n</tr>\\n<tr>\\n<td><code>default_tag</code></td>\\n<td><code>latest</code></td>\\n<td>overrides the default tag name used when generating with <code>auto_tag</code> enabled</td>\\n</tr>\\n<tr>\\n<td><code>label</code>/<code>labels</code></td>\\n<td><em>none</em></td>\\n<td>sets labels to use for the image in format <code>&lt;name&gt;=&lt;value&gt;</code></td>\\n</tr>\\n<tr>\\n<td><code>default_labels</code>/<code>auto_labels</code></td>\\n<td><code>true</code></td>\\n<td>sets docker image labels based on git information</td>\\n</tr>\\n<tr>\\n<td><code>build_args</code></td>\\n<td><em>none</em></td>\\n<td>sets custom build arguments for the build</td>\\n</tr>\\n<tr>\\n<td><code>build_args_from_env</code></td>\\n<td><em>none</em></td>\\n<td>forwards environment variables as custom arguments to the build</td>\\n</tr>\\n<tr>\\n<td><code>quiet</code></td>\\n<td><code>false</code></td>\\n<td>enables suppression of the build output</td>\\n</tr>\\n<tr>\\n<td><code>target</code></td>\\n<td><em>none</em></td>\\n<td>sets the build target to use</td>\\n</tr>\\n<tr>\\n<td><code>cache_from</code></td>\\n<td><em>none</em></td>\\n<td>sets images to consider as cache sources</td>\\n</tr>\\n<tr>\\n<td><code>pull_image</code></td>\\n<td><code>true</code></td>\\n<td>enforces to pull base image at build time</td>\\n</tr>\\n<tr>\\n<td><code>compress</code></td>\\n<td><code>false</code></td>\\n<td>enables compression of the build context using gzip</td>\\n</tr>\\n<tr>\\n<td><code>config</code></td>\\n<td><em>none</em></td>\\n<td>sets content of the docker daemon json config</td>\\n</tr>\\n<tr>\\n<td><code>purge</code></td>\\n<td><code>true</code></td>\\n<td>enables cleanup of the docker environment at the end of a build</td>\\n</tr>\\n<tr>\\n<td><code>no_cache</code></td>\\n<td><code>false</code></td>\\n<td>disables the usage of cached intermediate containers</td>\\n</tr>\\n<tr>\\n<td><code>add_host</code></td>\\n<td><em>none</em></td>\\n<td>sets additional host:ip mapping</td>\\n</tr>\\n<tr>\\n<td><code>output</code></td>\\n<td><em>none</em></td>\\n<td>sets build output in format <code>type=&lt;type&gt;[,&lt;key&gt;=&lt;value&gt;]</code></td>\\n</tr>\\n<tr>\\n<td><code>logins</code></td>\\n<td><em>none</em></td>\\n<td>option to log into multiple registries</td>\\n</tr>\\n</tbody></table>\\n<h2 id=\\"multi-registry-push-example\\">Multi registry push example</h2>\\n<p>Only supported with <code>woodpecker &gt;= 1.0.0</code> (next-da997fa3).</p>\\n<pre><code class=\\"language-yml\\">settings:\\n  repo: a6543/tmp,codeberg.org/6543/tmp\\n  tag: demo\\n  logins:\\n    - registry: https://index.docker.io/v1/\\n      username: a6543\\n      password:\\n        from_secret: docker_token\\n    - registry: https://codeberg.org\\n      username: &quot;6543&quot;\\n      password:\\n        from_secret: cb_token\\n</code></pre>\\n","tags":["docker","image","container","build"],"containerImage":"woodpeckerci/plugin-docker-buildx","containerImageUrl":"https://hub.docker.com/r/woodpeckerci/plugin-docker-buildx","verified":true}')}}]);