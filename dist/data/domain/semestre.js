System.register(["./intervalitem"], function (_export) {
  var IntervalItem, _createClass, _get, _inherits, _classCallCheck, Semestre;

  return {
    setters: [function (_intervalitem) {
      IntervalItem = _intervalitem.IntervalItem;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      //
      Semestre = _export("Semestre", (function (_IntervalItem) {
        function Semestre(oMap) {
          _classCallCheck(this, Semestre);

          _get(Object.getPrototypeOf(Semestre.prototype), "constructor", this).call(this, oMap);
          this._anneeid = null;
          if (oMap != undefined && oMap != null) {
            if (oMap.anneeid != undefined) {
              this.anneeid = oMap.anneeid;
            }
          } // oMap
        }

        _inherits(Semestre, _IntervalItem);

        _createClass(Semestre, {
          anneeid: {
            get: function () {
              return this._anneeid != undefined ? this._anneeid : null;
            },
            set: function (s) {
              if (s != undefined && s != null && s.toString().trim().length > 0) {
                this._anneeid = s;
              } else {
                this._anneeid = null;
              }
            }
          },
          has_anneeid: {
            get: function () {
              return this.anneeid != null;
            }
          },
          is_storeable: {
            get: function () {
              return _get(Object.getPrototypeOf(Semestre.prototype), "is_storeable", this) && this.has_anneeid;
            }
          },
          to_insert_map: {
            value: function to_insert_map(oMap) {
              _get(Object.getPrototypeOf(Semestre.prototype), "to_insert_map", this).call(this, oMap);
              if (this.has_anneeid) {
                oMap.anneeid = this.anneeid;
              }
            }
          },
          type: { // to_insert_map

            get: function () {
              return "semestre";
            }
          },
          collection_name: {
            get: function () {
              return "semestres";
            }
          }
        });

        return Semestre;
      })(IntervalItem));
    }
  };
});
// semestre.js
//
// class Annee
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL3NlbWVzdHJlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFHSSxZQUFZLGtEQUlILFFBQVE7Ozs7QUFKakIsa0JBQVksaUJBQVosWUFBWTs7Ozs7Ozs7Ozs7Ozs7QUFJSCxjQUFRO0FBQ04saUJBREYsUUFBUSxDQUNMLElBQUksRUFBRTtnQ0FEVCxRQUFROztBQUViLHFDQUZLLFFBQVEsNkNBRVAsSUFBSSxFQUFFO0FBQ1osY0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDcEIsY0FBSSxBQUFDLElBQUksSUFBSSxTQUFTLElBQU0sSUFBSSxJQUFJLElBQUksQUFBQyxFQUFFO0FBQzlDLGdCQUFJLElBQUksQ0FBQyxPQUFPLElBQUksU0FBUyxFQUFFO0FBQzdCLGtCQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDN0I7V0FDRjtBQUFBLFNBQ0E7O2tCQVRRLFFBQVE7O3FCQUFSLFFBQVE7QUFhZixpQkFBTztpQkFIQyxZQUFHO0FBQ2IscUJBQU8sQUFBQyxJQUFJLENBQUMsUUFBUSxJQUFJLFNBQVMsR0FBSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzthQUM1RDtpQkFDVSxVQUFDLENBQUMsRUFBRTtBQUNiLGtCQUFJLEFBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBTSxDQUFDLElBQUksSUFBSSxBQUFDLElBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEFBQUMsRUFBRTtBQUN2RSxvQkFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7ZUFDbkIsTUFBTTtBQUNMLG9CQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztlQUN0QjthQUNGOztBQUNHLHFCQUFXO2lCQUFBLFlBQUc7QUFDaEIscUJBQVEsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUU7YUFDL0I7O0FBQ0csc0JBQVk7aUJBQUEsWUFBRztBQUNsQixxQkFBUSwyQkF4QkUsUUFBUSxzQ0F3QlksSUFBSSxDQUFDLFdBQVcsQ0FBRTthQUNoRDs7QUFDRCx1QkFBYTttQkFBQSx1QkFBQyxJQUFJLEVBQUU7QUFDbEIseUNBM0JTLFFBQVEsK0NBMkJHLElBQUksRUFBRTtBQUMxQixrQkFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQ3BCLG9CQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7ZUFDN0I7YUFDRjs7QUFDRyxjQUFJOztpQkFBQSxZQUFHO0FBQ1QscUJBQU8sVUFBVSxDQUFDO2FBQ25COztBQUNHLHlCQUFlO2lCQUFBLFlBQUc7QUFDcEIscUJBQU8sV0FBVyxDQUFDO2FBQ3BCOzs7O2VBckNVLFFBQVE7U0FBUyxZQUFZIiwiZmlsZSI6ImRhdGEvZG9tYWluL3NlbWVzdHJlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=