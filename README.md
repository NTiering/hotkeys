# hotkeys
supports hotkeys on web pages. Requires radio.js

<script>
   // happy path 
    
    hotKeys();
    document.write("<p>Press (Ctrl) Control key , then release , then press b, then press x</p>")
    document.write("<p>Press (Ctrl) Control key , then release , then press b, then press y</p>")
    
    radio("hotKeys-bx").subscribe(function (e) {
        alert("I bet you did Ctrl + b + x ");
    })

    radio("hotKeys-by").subscribe(function (e) {
        alert("I bet you did Ctrl + b + y");
    })
</script>
