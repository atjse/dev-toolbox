## Modules

<dl>
<dt><a href="#module_dev-toolbox/files">dev-toolbox/files</a></dt>
<dd><p>Files module.</p>
</dd>
<dt><a href="#module_dev-toolbox">dev-toolbox</a></dt>
<dd><p>The dev-toolbox module.</p>
</dd>
<dt><a href="#module_dev-toolbox/server">dev-toolbox/server</a></dt>
<dd><p>Server module.</p>
</dd>
<dt><a href="#module_dev-toolbox/server/TempServer">dev-toolbox/server/TempServer</a></dt>
<dd><p>The TempServer module.</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#TempServer">TempServer</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#path">path(path)</a> ⇒ <code>string</code></dt>
<dd><p>Returns a normalized path.</p>
</dd>
<dt><a href="#root">root([path])</a> ⇒ <code>string</code></dt>
<dd><p>Returns a normalized path relative to the project&#39;s root directory.</p>
</dd>
<dt><a href="#getHost">getHost([host])</a> ⇒ <code>string</code></dt>
<dd><p>Returns the host.</p>
</dd>
<dt><a href="#getPort">getPort([port])</a> ⇒ <code>number</code></dt>
<dd><p>Returns a free port.</p>
</dd>
<dt><a href="#getUrl">getUrl([host], [port])</a> ⇒ <code>string</code></dt>
<dd><p>Returns the URL. The default URL is &quot;<a href="http://127.0.0.1:8080&quot;">http://127.0.0.1:8080&quot;</a>.</p>
</dd>
<dt><a href="#startTempServer">startTempServer([...args])</a> ⇒ <code><a href="#TempServer">Promise.&lt;TempServer&gt;</a></code></dt>
<dd><p>Starts a temporary server for testing purposes.</p>
</dd>
</dl>

<a name="module_dev-toolbox/files"></a>

## dev-toolbox/files
Files module.

<a name="module_dev-toolbox"></a>

## dev-toolbox
The dev-toolbox module.

<a name="module_dev-toolbox/server"></a>

## dev-toolbox/server
Server module.

<a name="module_dev-toolbox/server/TempServer"></a>

## dev-toolbox/server/TempServer
The TempServer module.

<a name="TempServer"></a>

## TempServer
**Kind**: global class  

* [TempServer](#TempServer)
    * [new TempServer(host, port)](#new_TempServer_new)
    * [.host](#TempServer+host) ⇒ <code>string</code>
    * [.port](#TempServer+port) ⇒ <code>number</code>
    * [.start()](#TempServer+start) ⇒ [<code>Promise.&lt;TempServer&gt;</code>](#TempServer)
    * [.stop()](#TempServer+stop) ⇒ [<code>Promise.&lt;TempServer&gt;</code>](#TempServer)

<a name="new_TempServer_new"></a>

### new TempServer(host, port)
Creates a temporary server for test purposes.

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>host</td><td><code>string</code></td><td><p>The port of the temporary server.</p>
</td>
    </tr><tr>
    <td>port</td><td><code>number</code></td><td><p>The port of the temporary server.</p>
</td>
    </tr>  </tbody>
</table>

<a name="TempServer+host"></a>

### tempServer.host ⇒ <code>string</code>
Returns the host.

**Kind**: instance property of [<code>TempServer</code>](#TempServer)  
**Returns**: <code>string</code> - The host.  
<a name="TempServer+port"></a>

### tempServer.port ⇒ <code>number</code>
Returns the port.

**Kind**: instance property of [<code>TempServer</code>](#TempServer)  
**Returns**: <code>number</code> - The port.  
<a name="TempServer+start"></a>

### tempServer.start() ⇒ [<code>Promise.&lt;TempServer&gt;</code>](#TempServer)
Starts the temporary server.

**Kind**: instance method of [<code>TempServer</code>](#TempServer)  
<a name="TempServer+stop"></a>

### tempServer.stop() ⇒ [<code>Promise.&lt;TempServer&gt;</code>](#TempServer)
Stops the temporary server.

**Kind**: instance method of [<code>TempServer</code>](#TempServer)  
<a name="path"></a>

## path(path) ⇒ <code>string</code>
Returns a normalized path.

**Kind**: global function  
**Returns**: <code>string</code> - The normalized path.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>path</td><td><code>string</code></td><td><p>The path to be normalized.</p>
</td>
    </tr>  </tbody>
</table>

<a name="root"></a>

## root([path]) ⇒ <code>string</code>
Returns a normalized path relative to the project's root directory.

**Kind**: global function  
**Returns**: <code>string</code> - The normalized path relative to the project's root directory.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[path]</td><td><code>string</code></td><td><p>The path to use to normalize.
                         If none given, only the project&#39;s root directory will be used.</p>
</td>
    </tr>  </tbody>
</table>

<a name="getHost"></a>

## getHost([host]) ⇒ <code>string</code>
Returns the host.

**Kind**: global function  
**Returns**: <code>string</code> - The host.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[host]</td><td><code>string</code></td><td><p>The host. The default host is &quot;127.0.0.1&quot;.</p>
</td>
    </tr>  </tbody>
</table>

<a name="getPort"></a>

## getPort([port]) ⇒ <code>number</code>
Returns a free port.

**Kind**: global function  
**Returns**: <code>number</code> - The free port.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[port]</td><td><code>number</code></td><td><p>The port. If no port given, the default port is 8080.</p>
</td>
    </tr>  </tbody>
</table>

<a name="getUrl"></a>

## getUrl([host], [port]) ⇒ <code>string</code>
Returns the URL. The default URL is "http://127.0.0.1:8080".

**Kind**: global function  
**Returns**: <code>string</code> - The URL with the given port.  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[host]</td><td><code>string</code></td><td><p>The host. The default host is &quot;127.0.0.1&quot;.</p>
</td>
    </tr><tr>
    <td>[port]</td><td><code>number</code></td><td><p>The port. If no port given, the default port is 8080.</p>
</td>
    </tr>  </tbody>
</table>

<a name="startTempServer"></a>

## startTempServer([...args]) ⇒ [<code>Promise.&lt;TempServer&gt;</code>](#TempServer)
Starts a temporary server for testing purposes.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[...args]</td><td><code>*</code></td><td><p>If one argument is specified, that will be the (port).
                    If two arguments, they will be the (host, port).</p>
</td>
    </tr>  </tbody>
</table>

