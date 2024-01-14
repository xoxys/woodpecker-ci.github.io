"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[8809],{76713:e=>{e.exports=JSON.parse('{"name":"Block Git changes","url":"https://codeberg.org/qwerty287/woodpecker-block-git-changes","icon":"https://raw.githubusercontent.com/appleboy/drone-git-push/master/images/logo.svg","description":"Plugin to block uncommited  changes in the Git repository","docs":"<p>Plugin that fails if the Git repository contains any uncommited changes.</p>\\n<h2>Usage</h2>\\n<pre><code class=\\"language-yaml\\">pipeline:\\n    block-changes:\\n        image: qwerty287/woodpecker-block-git-changes\\n</code></pre>\\n<p>This will never fail because there isn\'t any change done before.</p>\\n<pre><code class=\\"language-yaml\\">pipeline:\\n    echo:\\n        image: alpine\\n        commands:\\n            - echo \\"hello world\\" &gt; README.md\\n\\n    block-changes:\\n      image: qwerty287/woodpecker-block-git-changes\\n</code></pre>\\n<p>This will fail if your README.md doesn\'t already contain <code>hello world</code>.</p>\\n","tags":["git","changes"],"containerImage":"qwerty287/woodpecker-block-git-changes","containerImageUrl":"https://hub.docker.com/r/qwerty287/woodpecker-block-git-changes","verified":false}')}}]);