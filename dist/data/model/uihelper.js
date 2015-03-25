System.register([], function (_export) {
  var _createClass, _classCallCheck, UIHelper;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      // uihelper.js
      UIHelper = _export("UIHelper", (function () {
        function UIHelper() {
          _classCallCheck(this, UIHelper);
        }

        _createClass(UIHelper, null, {
          confirm: {
            value: function confirm(message) {
              return window.confirm(message);
            }
          },
          alert: {
            value: function alert(message) {
              window.alert(message);
            }
          },
          prompt: {
            value: function prompt(message, response) {
              return window.prompt(message, response);
            }
          }
        });

        return UIHelper;
      })());
    }
  };
});
// class UIHelper
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvbW9kZWwvdWloZWxwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtxQ0FDYSxRQUFROzs7Ozs7Ozs7Ozs7QUFBUixjQUFRO2lCQUFSLFFBQVE7Z0NBQVIsUUFBUTs7O3FCQUFSLFFBQVE7QUFDVixpQkFBTzttQkFBQSxpQkFBQyxPQUFPLEVBQUU7QUFDeEIscUJBQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNoQzs7QUFDTSxlQUFLO21CQUFBLGVBQUMsT0FBTyxFQUFFO0FBQ3BCLG9CQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3ZCOztBQUNNLGdCQUFNO21CQUFBLGdCQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUU7QUFDL0IscUJBQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDekM7Ozs7ZUFUVSxRQUFRIiwiZmlsZSI6ImRhdGEvbW9kZWwvdWloZWxwZXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==