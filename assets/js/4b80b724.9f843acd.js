"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[9350],{51986:o=>{o.exports=JSON.parse('{"name":"Codecov","url":"https://github.com/woodpecker-ci/plugin-codecov","icon":"https://raw.githubusercontent.com/woodpecker-ci/plugin-codecov/main/codecov.svg","description":"Plugin to upload coverage reports to Codecov.io.","docs":"<p>The Codecov plugin uploads coverage reports in one of the <a href=\\"https://docs.codecov.com/docs/supported-report-formats\\">supported formats</a> to <a href=\\"https://about.codecov.io/\\">Codecov.io</a>.</p>\\n<h2>Usage</h2>\\n<p>To use the plugin add a step similar to the following one to your Woodpecker pipeline config:</p>\\n<pre><code class=\\"language-yml\\">pipeline:\\n  codecov:\\n    image: woodpeckerci/plugin-codecov\\n    settings:\\n      files:\\n        - my-coverage-report-output.out\\n        - another-coverage-report.json\\n      token:\\n        from_secret: codecov_token\\n</code></pre>\\n","tags":["coverage","testing"],"containerImage":"woodpeckerci/plugin-codecov","containerImageUrl":"https://hub.docker.com/r/woodpeckerci/plugin-codecov","verified":true}')}}]);