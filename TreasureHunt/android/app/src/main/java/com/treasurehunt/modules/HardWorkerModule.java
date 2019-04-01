package com.treasurehunt.modules;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;


public class HardWorkerModule extends ReactContextBaseJavaModule {

    @Override
    public void initialize() {
        super.initialize();
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public HardWorkerModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "HardWorkerModule";
    }

    @ReactMethod
    public void work(Promise promise) throws InterruptedException {
        Thread.sleep(2000);
        promise.resolve(true);
    }
}