/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * @class Ext.StoreMgr
 * @extends Ext.util.MixedCollection
 * The default global group of stores.
 * @singleton
 */
Ext.StoreMgr = Ext.apply(new Ext.util.MixedCollection(), {
    /**
     * @cfg {Object} listeners @hide
     */

    /**
     * Registers one or more Stores with the StoreMgr. You do not normally need to register stores
     * manually.  Any store initialized with a {@link Ext.data.Store#storeId} will be auto-registered.
     * @param {Ext.data.Store...} stores Any number of Store instances
     */
    register : function(){
        for(var i = 0, s; s = arguments[i]; i++){
            this.add(s);
        }
    },

    /**
     * Unregisters one or more Stores with the StoreMgr
     * @param {String/Object...} ids The ids of Stores, or a Store instances
     */
    unregister : function(){
        for(var i = 0, s; s = arguments[i]; i++){
            this.remove(this.lookup(s));
        }
    },

    /**
     * Gets a registered Store by id
     * @param {String/Object} id The id of the Store, or a Store instance
     * @return {Ext.data.Store}
     */
    lookup : function(id){
        return typeof id == "object" ? id : this.get(id);
    },

    // getKey implementation for MixedCollection
    getKey : function(o){
         return o.storeId || o.id;
    }
});