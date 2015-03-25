System.register(["./pagedviewmodel"], function (_export) {
  var PagedViewModel, _createClass, _get, _inherits, _classCallCheck, SigleNameViewModel;

  return {
    setters: [function (_pagedviewmodel) {
      PagedViewModel = _pagedviewmodel.PagedViewModel;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      //
      SigleNameViewModel = _export("SigleNameViewModel", (function (_PagedViewModel) {
        function SigleNameViewModel(dataService, model, baseTitle) {
          _classCallCheck(this, SigleNameViewModel);

          _get(Object.getPrototypeOf(SigleNameViewModel.prototype), "constructor", this).call(this, dataService, model, baseTitle);
        }

        _inherits(SigleNameViewModel, _PagedViewModel);

        _createClass(SigleNameViewModel, {
          sigle: { // constructor

            get: function () {
              return this.current !== undefined && this.current !== null && this.current.sigle !== undefined ? this.current.sigle : null;
            },
            set: function (s) {
              if (this.current !== undefined && this.current !== null) {
                this.current.sigle = s;
              }
            }
          },
          name: {
            get: function () {
              return this.current !== undefined && this.current !== null && this.current.name !== undefined ? this.current.name : null;
            },
            set: function (s) {
              if (this.current !== undefined && this.current !== null) {
                this.current.name = s;
              }
            }
          },
          description: {
            get: function () {
              return this.current !== undefined && this.current !== null && this.current.description !== undefined ? this.current.description : null;
            },
            set: function (s) {
              if (this.current !== undefined && this.current !== null) {
                this.current.description = s;
              }
            }
          }
        });

        return SigleNameViewModel;
      })(PagedViewModel));
    }
  };
});
// siglenameviewmodel.js
//
// class SigleNameViewModel
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvbW9kZWwvc2lnbGVuYW1ldmlld21vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFFUSxjQUFjLGtEQUVULGtCQUFrQjs7OztBQUZ2QixvQkFBYyxtQkFBZCxjQUFjOzs7Ozs7Ozs7Ozs7OztBQUVULHdCQUFrQjtBQUNmLGlCQURILGtCQUFrQixDQUNkLFdBQVcsRUFBRSxLQUFLLEVBQUMsU0FBUyxFQUFFO2dDQURsQyxrQkFBa0I7O0FBRW5CLHFDQUZDLGtCQUFrQiw2Q0FFYixXQUFXLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBRTtTQUN0Qzs7a0JBSEksa0JBQWtCOztxQkFBbEIsa0JBQWtCO0FBUXpCLGVBQUs7O2lCQUpFLFlBQUc7QUFDWixxQkFBTyxBQUFDLEFBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQU0sSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLEFBQUMsSUFDNUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssU0FBUyxBQUFDLEdBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ25FO2lCQUNRLFVBQUMsQ0FBQyxFQUFFO0FBQ1gsa0JBQUksQUFBQyxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBTSxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksQUFBQyxFQUFFO0FBQzNELG9CQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7ZUFDeEI7YUFDRjs7QUFLRyxjQUFJO2lCQUpBLFlBQUc7QUFDVCxxQkFBTyxBQUFDLEFBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQU0sSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLEFBQUMsSUFDNUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssU0FBUyxBQUFDLEdBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2FBQ2pFO2lCQUNPLFVBQUMsQ0FBQyxFQUFFO0FBQ1Ysa0JBQUksQUFBQyxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBTSxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksQUFBQyxFQUFFO0FBQzNELG9CQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7ZUFDdkI7YUFDRjs7QUFLRyxxQkFBVztpQkFKQSxZQUFHO0FBQ2hCLHFCQUFPLEFBQUMsQUFBQyxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBTSxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksQUFBQyxJQUM1RCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsS0FBSyxTQUFTLEFBQUMsR0FBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7YUFDL0U7aUJBQ2MsVUFBQyxDQUFDLEVBQUU7QUFDakIsa0JBQUksQUFBQyxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBTSxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksQUFBQyxFQUFFO0FBQzNELG9CQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7ZUFDOUI7YUFDRjs7OztlQTlCVSxrQkFBa0I7U0FBUyxjQUFjIiwiZmlsZSI6ImRhdGEvbW9kZWwvc2lnbGVuYW1ldmlld21vZGVsLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=