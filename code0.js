gdjs.Start_32ScreenCode = {};
gdjs.Start_32ScreenCode.GDMoreTextObjects1= [];
gdjs.Start_32ScreenCode.GDMoreTextObjects2= [];
gdjs.Start_32ScreenCode.GDStartButtonObjects1= [];
gdjs.Start_32ScreenCode.GDStartButtonObjects2= [];
gdjs.Start_32ScreenCode.GDHintTextObjects1= [];
gdjs.Start_32ScreenCode.GDHintTextObjects2= [];

gdjs.Start_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Start_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Start_32ScreenCode.condition1IsTrue_0 = {val:false};
gdjs.Start_32ScreenCode.condition2IsTrue_0 = {val:false};


gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.Start_32ScreenCode.GDStartButtonObjects1});gdjs.Start_32ScreenCode.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Start_32ScreenCode.GDStartButtonObjects1);

gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Start_32ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32ScreenCode.mapOfGDgdjs_46Start_9532ScreenCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Start_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Start_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Start_32ScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Test scene");
}}

}


};

gdjs.Start_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32ScreenCode.GDMoreTextObjects1.length = 0;
gdjs.Start_32ScreenCode.GDMoreTextObjects2.length = 0;
gdjs.Start_32ScreenCode.GDStartButtonObjects1.length = 0;
gdjs.Start_32ScreenCode.GDStartButtonObjects2.length = 0;
gdjs.Start_32ScreenCode.GDHintTextObjects1.length = 0;
gdjs.Start_32ScreenCode.GDHintTextObjects2.length = 0;

gdjs.Start_32ScreenCode.eventsList0(runtimeScene);
return;

}

gdjs['Start_32ScreenCode'] = gdjs.Start_32ScreenCode;
