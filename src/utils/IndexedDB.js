export default class IndexedDB {
    async list(cb) {
        let db = await this._init();
        var customers = [];
        
        var transaction = db.transaction(["name"]);
        var objectStore = transaction.objectStore("name");

        objectStore.openCursor().onsuccess = function(event) {
          var cursor = event.target.result;
          if (cursor) {
            customers.push(cursor.value);
            cursor.continue();
          }
          else {
            cb(customers);
          }
        };
    }
    
    _init(cb) {
        return new Promise( (resolve, reject) => {
            var request = window.indexedDB.open("MyTestDatabase", 4);
        
            request.onsuccess = event => {
                var db = event.target.result;
                resolve(db);
            }
        })
        
        }
    }


