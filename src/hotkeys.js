  var hotKeys = function (config) {

        var _capture = false;
        var _stack = [];
        var _maxKeysToCapture = (config && config.maxKeysToCapture) || 3;
        var _channelName = (config && config.channelName) || "hotKeys";
        var _debug = (config && config.debug) || false;

        //----------------
        //  broadcast updates 
        //----------------
        var _broadcast = function (localStack) {
            
            var channel = _channelName + "-";

            for (var i = 0 ; i < localStack.length; i++){
                var channel = channel + localStack[i].key;
            }

            if (_debug) console.log("hotkeys:: broadcast on " + channel);           
            
            radio(channel).broadcast(localStack);
        }

        //----------------
        //  add key presses to stack
        //----------------
        var _onkeyUp = function (e) {
           
            _stack.push(e);

            if (e.key == "Control") {
                if (_debug) console.log("hotkeys:: capture started ");
                _capture = true;
                _stack = [];
                return; 
            }
            if (_stack.length > _maxKeysToCapture) {
                if (_debug) console.log("hotkeys:: max capture of " + _maxKeysToCapture  + " excedded");
                _capture = false;
                _stack = [];
                return;
            }
            if (!_capture) {
                return;
            }  
            _broadcast(_stack);
            
        }

        window.onkeyup = _onkeyUp;

    }
