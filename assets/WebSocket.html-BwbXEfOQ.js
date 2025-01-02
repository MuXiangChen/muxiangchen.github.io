import{_ as t,c as o,e as s,o as a}from"./app-gihhjKhR.js";const c={};function n(i,e){return a(),o("div",null,e[0]||(e[0]=[s(`<h2 id="websocket-的引入" tabindex="-1"><a class="header-anchor" href="#websocket-的引入"><span>WebSocket 的引入</span></a></h2><h3 id="背景分析" tabindex="-1"><a class="header-anchor" href="#背景分析"><span>背景分析</span></a></h3><p>HTTP协议是无状态的，服务器只会响应来自客户端的请求，但是它与客户端之间不具备持续连接。</p><p>当用户在浏览器上进行操作时，可以请求服务器上的api；但是反过来却不可能：服务器端发生了一个事件，无法将这个事件的信息<strong>实时主动</strong>地通知客户端。只有在客户端查询服务器当前状态时，所发生事件的信息才会从服务器传递到客户端。</p><p>那怎么去实时地知道服务器的状态呢？方法有两个：</p><p>（1）<strong>轮询</strong>：客户端每隔很短的时间，都会对服务器发出请求，查看是否有新的消息，只要轮询速度足够快，例如1秒，就能给人造成交互是实时进行的印象。这种做法是无奈之举，实际上对服务器、客户端双方都造成了大量的性能浪费。</p><p>（2）<strong>长连接</strong>：客户端只请求一次，但是服务器会将连接保持，不会返回结果。当服务器有了新数据时，实时地发给客户端，而一直保持挂起状态。这种做法的也造成了大量的性能浪费。</p><h3 id="websocket-协议" tabindex="-1"><a class="header-anchor" href="#websocket-协议"><span>WebSocket 协议</span></a></h3><p>最新的 HTML5协议，制定了 WebSocket 协议标准，允许客户端和服务器端以<strong>全双工</strong>的方式进行通信。</p><p>WebSocket 的原理非常简单：利用HTTP请求产生握手，HTTP头部含有 WebSocket 协议的请求，*<em>握手之后，二者转用TCP协议进行交流</em>（QQ的协议）。</p><p>WebSocket协议需要浏览器和服务器都支持才可以使用：</p><ul><li><p>支持WebSocket协议的浏览器有：Chrome 4、火狐4、IE10、Safari5</p></li><li><p>支持WebSocket协议的服务器有：Node 0、Apach7.0.2、Nginx1.3</p></li></ul><h3 id="http-长连接和-websocket-的长连接区别" tabindex="-1"><a class="header-anchor" href="#http-长连接和-websocket-的长连接区别"><span>http 长连接和 websocket 的长连接区别</span></a></h3><p>HTTP1.1通过使用Connection:keep-alive进行长连接，HTTP 1.1默认进行持久连接。在一次 TCP 连接中可以完成多个 HTTP 请求，但是对每个请求仍然要单独发 header，Keep-Alive不会永久保持连接，它有一个保持时间，可以在不同的服务器软件（如Apache）中设定这个时间。</p><p>websocket是一个真正的全双工。长连接第一次tcp链路建立之后，后续数据可以双方都进行发送，<strong>不需要发送请求头</strong>。</p><p>keep-alive双方并没有建立正真的连接会话，服务端可以在任何一次请求完成后关闭。WebSocket 它本身就规定了是正真的、双工的长连接，两边都必须要维持住连接的状态。</p><h3 id="socket-io-的引入" tabindex="-1"><a class="header-anchor" href="#socket-io-的引入"><span>Socket.IO 的引入</span></a></h3><p>Node.js上需要写一些程序，来处理TCP请求。</p><p>Node.js从诞生之日起，就支持 WebSocket 协议。不过，从底层一步一步搭建一个Socket服务器很费劲（想象一下Node写一个静态文件服务都那么费劲）。所以，有大神帮我们写了一个库 Socket.IO。</p><p>Socket.IO 是业界良心，新手福音。它屏蔽了所有底层细节，让顶层调用非常简单。并且还为不支持 WebSocket 协议的浏览器，提供了长轮询的透明模拟机制。</p><p>Node的单线程、非阻塞I/O、事件驱动机制，使它非常适合Socket服务器。</p><h3 id="socket-io-的安装" tabindex="-1"><a class="header-anchor" href="#socket-io-的安装"><span>Socket.IO 的安装</span></a></h3><p>Socket.IO 的官网是：<a href="http://socket.io/" target="_blank" rel="noopener noreferrer">http://socket.io/</a></p><p>安装方式：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">	npm install socket.io</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,25)]))}const p=t(c,[["render",n],["__file","WebSocket.html.vue"]]),r=JSON.parse('{"path":"/Frontend/11-Node.js/WebSocket.html","title":"01-数据库的基础知识","lang":"en-US","frontmatter":{"title":"01-数据库的基础知识","publish":false},"headers":[{"level":2,"title":"WebSocket 的引入","slug":"websocket-的引入","link":"#websocket-的引入","children":[{"level":3,"title":"背景分析","slug":"背景分析","link":"#背景分析","children":[]},{"level":3,"title":"WebSocket 协议","slug":"websocket-协议","link":"#websocket-协议","children":[]},{"level":3,"title":"http 长连接和 websocket 的长连接区别","slug":"http-长连接和-websocket-的长连接区别","link":"#http-长连接和-websocket-的长连接区别","children":[]},{"level":3,"title":"Socket.IO 的引入","slug":"socket-io-的引入","link":"#socket-io-的引入","children":[]},{"level":3,"title":"Socket.IO 的安装","slug":"socket-io-的安装","link":"#socket-io-的安装","children":[]}]}],"git":{"updatedTime":1735788687000,"contributors":[{"name":"Jasmine Mo","username":"Jasmine Mo","email":"loxluthor@gmail.com","commits":1,"url":"https://github.com/Jasmine Mo"}]},"filePathRelative":"Frontend/11-Node.js/WebSocket.md"}');export{p as comp,r as data};