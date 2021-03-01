gdjs.Win_32ScreenCode = {};
gdjs.Win_32ScreenCode.GDGameOverTextObjects1= [];
gdjs.Win_32ScreenCode.GDGameOverTextObjects2= [];
gdjs.Win_32ScreenCode.GDMoreTextObjects1= [];
gdjs.Win_32ScreenCode.GDMoreTextObjects2= [];
gdjs.Win_32ScreenCode.GDRestartButtonObjects1= [];
gdjs.Win_32ScreenCode.GDRestartButtonObjects2= [];

gdjs.Win_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Win_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Win_32ScreenCode.condition1IsTrue_0 = {val:false};
gdjs.Win_32ScreenCode.condition2IsTrue_0 = {val:false};


gdjs.Win_32ScreenCode.mapOfGDgdjs_46Win_9532ScreenCode_46GDRestartButtonObjects1Objects = Hashtable.newFrom({"RestartButton": gdjs.Win_32ScreenCode.GDRestartButtonObjects1});gdjs.Win_32ScreenCode.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.Win_32ScreenCode.GDRestartButtonObjects1);

gdjs.Win_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Win_32ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.Win_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Win_32ScreenCode.mapOfGDgdjs_46Win_9532ScreenCode_46GDRestartButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Win_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Win_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Win_32ScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Test scene");
}}

}


};

gdjs.Win_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Win_32ScreenCode.GDGameOverTextObjects1.length = 0;
gdjs.Win_32ScreenCode.GDGameOverTextObjects2.length = 0;
gdjs.Win_32ScreenCode.GDMoreTextObjects1.length = 0;
gdjs.Win_32ScreenCode.GDMoreTextObjects2.length = 0;
gdjs.Win_32ScreenCode.GDRestartButtonObjects1.length = 0;
gdjs.Win_32ScreenCode.GDRestartButtonObjects2.length = 0;

gdjs.Win_32ScreenCode.eventsList0(runtimeScene);
return;

}

gdjs['Win_32ScreenCode'] = gdjs.Win_32ScreenCode;
