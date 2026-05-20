gdjs.LobbyselectCode = {};
gdjs.LobbyselectCode.localVariables = [];
gdjs.LobbyselectCode.idToCallbackMap = new Map();
gdjs.LobbyselectCode.GDNewTextObjects1= [];
gdjs.LobbyselectCode.GDNewTextObjects2= [];
gdjs.LobbyselectCode.GDcmbtmodeObjects1= [];
gdjs.LobbyselectCode.GDcmbtmodeObjects2= [];
gdjs.LobbyselectCode.GDparlmodeObjects1= [];
gdjs.LobbyselectCode.GDparlmodeObjects2= [];
gdjs.LobbyselectCode.GDcursorObjects1= [];
gdjs.LobbyselectCode.GDcursorObjects2= [];


gdjs.LobbyselectCode.mapOfGDgdjs_9546LobbyselectCode_9546GDcmbtmodeObjects1Objects = Hashtable.newFrom({"cmbtmode": gdjs.LobbyselectCode.GDcmbtmodeObjects1});
gdjs.LobbyselectCode.mapOfGDgdjs_9546LobbyselectCode_9546GDparlmodeObjects1Objects = Hashtable.newFrom({"parlmode": gdjs.LobbyselectCode.GDparlmodeObjects1});
gdjs.LobbyselectCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isLobbyGameRunning();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PVP", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "fgdfg", 0.1, null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.LobbyselectCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.LobbyselectCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.LobbyselectCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getTouchX(runtimeScene, 1, "", 0),gdjs.evtTools.input.getTouchY(runtimeScene, 1, "", 0));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("cmbtmode"), gdjs.LobbyselectCode.GDcmbtmodeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LobbyselectCode.mapOfGDgdjs_9546LobbyselectCode_9546GDcmbtmodeObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.multiplayer.openLobbiesWindow(runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("parlmode"), gdjs.LobbyselectCode.GDparlmodeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LobbyselectCode.mapOfGDgdjs_9546LobbyselectCode_9546GDparlmodeObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.multiplayer.openLobbiesWindow(runtimeScene);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isLobbyGameRunning();
}
if (isConditionTrue_0) {
}

}


};

gdjs.LobbyselectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LobbyselectCode.GDNewTextObjects1.length = 0;
gdjs.LobbyselectCode.GDNewTextObjects2.length = 0;
gdjs.LobbyselectCode.GDcmbtmodeObjects1.length = 0;
gdjs.LobbyselectCode.GDcmbtmodeObjects2.length = 0;
gdjs.LobbyselectCode.GDparlmodeObjects1.length = 0;
gdjs.LobbyselectCode.GDparlmodeObjects2.length = 0;
gdjs.LobbyselectCode.GDcursorObjects1.length = 0;
gdjs.LobbyselectCode.GDcursorObjects2.length = 0;

gdjs.LobbyselectCode.eventsList0(runtimeScene);
gdjs.LobbyselectCode.GDNewTextObjects1.length = 0;
gdjs.LobbyselectCode.GDNewTextObjects2.length = 0;
gdjs.LobbyselectCode.GDcmbtmodeObjects1.length = 0;
gdjs.LobbyselectCode.GDcmbtmodeObjects2.length = 0;
gdjs.LobbyselectCode.GDparlmodeObjects1.length = 0;
gdjs.LobbyselectCode.GDparlmodeObjects2.length = 0;
gdjs.LobbyselectCode.GDcursorObjects1.length = 0;
gdjs.LobbyselectCode.GDcursorObjects2.length = 0;


return;

}

gdjs['LobbyselectCode'] = gdjs.LobbyselectCode;
