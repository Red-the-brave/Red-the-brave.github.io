gdjs.evtsExt__ShootExtension__Fire = {};
gdjs.evtsExt__ShootExtension__Fire.GDPlayerObjects1= [];
gdjs.evtsExt__ShootExtension__Fire.GDPlayerObjects2= [];
gdjs.evtsExt__ShootExtension__Fire.GDLaserBulletObjects1= [];
gdjs.evtsExt__ShootExtension__Fire.GDLaserBulletObjects2= [];

gdjs.evtsExt__ShootExtension__Fire.conditionTrue_0 = {val:false};
gdjs.evtsExt__ShootExtension__Fire.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__ShootExtension__Fire.mapOfGDgdjs_46evtsExt_95_95ShootExtension_95_95Fire_46GDLaserBulletObjects1Objects = Hashtable.newFrom({"LaserBullet": gdjs.evtsExt__ShootExtension__Fire.GDLaserBulletObjects1});gdjs.evtsExt__ShootExtension__Fire.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("LaserBullet"), gdjs.evtsExt__ShootExtension__Fire.GDLaserBulletObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__ShootExtension__Fire.GDPlayerObjects1);
{for(var i = 0, len = gdjs.evtsExt__ShootExtension__Fire.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShootExtension__Fire.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("FireBullet")).FireTowardPosition((gdjs.evtsExt__ShootExtension__Fire.GDPlayerObjects1[i].getX()), (gdjs.evtsExt__ShootExtension__Fire.GDPlayerObjects1[i].getY()), gdjs.evtsExt__ShootExtension__Fire.mapOfGDgdjs_46evtsExt_95_95ShootExtension_95_95Fire_46GDLaserBulletObjects1Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 2500, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__ShootExtension__Fire.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShootExtension__Fire.GDPlayerObjects1[i].returnVariable(gdjs.evtsExt__ShootExtension__Fire.GDPlayerObjects1[i].getVariables().get("Ammo")).sub(1);
}
}{for(var i = 0, len = gdjs.evtsExt__ShootExtension__Fire.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShootExtension__Fire.GDPlayerObjects1[i].returnVariable(gdjs.evtsExt__ShootExtension__Fire.GDPlayerObjects1[i].getVariables().get("TriggerPulled")).setNumber(1);
}
}}

}


};

gdjs.evtsExt__ShootExtension__Fire.func = function(runtimeScene, Player, FireBullet, LaserBullet, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Player": Player
, "LaserBullet": LaserBullet
},
  _objectArraysMap: {
"Player": gdjs.objectsListsToArray(Player)
, "LaserBullet": gdjs.objectsListsToArray(LaserBullet)
},
  _behaviorNamesMap: {
"FireBullet": FireBullet
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ShootExtension__Fire.GDPlayerObjects1.length = 0;
gdjs.evtsExt__ShootExtension__Fire.GDPlayerObjects2.length = 0;
gdjs.evtsExt__ShootExtension__Fire.GDLaserBulletObjects1.length = 0;
gdjs.evtsExt__ShootExtension__Fire.GDLaserBulletObjects2.length = 0;

gdjs.evtsExt__ShootExtension__Fire.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

