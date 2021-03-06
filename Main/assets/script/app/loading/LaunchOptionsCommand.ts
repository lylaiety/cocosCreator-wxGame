// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import {ICommand} from "../../../framework/facade/ICommand";
import Facade from "../../../framework/facade/Facade";
import {wxApi} from "../../../framework/wxApi/wxApi";

const {ccclass, property} = cc._decorator;

@ccclass("LaunchOptionsCommand")
export default class LaunchOptionsCommand implements ICommand {

    async execute (...args):Promise{
        return new Promise(async resolve => {
            if (wxApi.enable){
                /**  检查启动参数 */
                let launchObj = wx.getLaunchOptionsSync();
                console.log(launchObj, "launchObj");
                let query = launchObj['query'];
                if (typeof query['type'] == "string"){
                    await Facade.executeCommand("LoadSceneCommand", "HomeScene");
                }else {
                    await Facade.executeCommand("LoadSceneCommand", "HomeScene");
                }
            } else {
                await Facade.executeCommand("LoadSceneCommand", "HomeScene");
            }
            resolve();
        });
    }
}
