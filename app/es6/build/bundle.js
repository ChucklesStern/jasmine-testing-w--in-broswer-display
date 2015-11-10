System.registerModule("../spec/const.js", [], function() {
  "use strict";
  var __moduleName = "../spec/const.js";
  describe("using const", function() {
    it("will make a variable read-only", function() {
      var MAX_SIZE = 10;
      expect(MAX_SIZE).toBe(10);
    });
    it("can shadow outer declaration", function() {
      var x = 12;
      var doWork = function() {
        var x = 10;
        return x;
      };
      var result = doWork();
      expect(result).toBe(10);
      expect(x).toBe(12);
    });
  });
  return {};
});
System.get("../spec/const.js" + '');
System.registerModule("../spec/defaults.js", [], function() {
  "use strict";
  var __moduleName = "../spec/defaults.js";
  describe("default parameters", function() {
    it("provides defaults", function() {
      var doWork = function() {
        var name = arguments[0] !== (void 0) ? arguments[0] : "Scott";
        return name;
      };
      var result = doWork();
      expect(result).toBe("?");
    });
    it("will provide a value for undefined", function() {
      var $__2,
          $__3;
      var doWork = function() {
        var a = arguments[0] !== (void 0) ? arguments[0] : 1;
        var b = arguments[1] !== (void 0) ? arguments[1] : 2;
        var c = arguments[2] !== (void 0) ? arguments[2] : 3;
        return [a, b, c];
      };
      var $__1 = doWork(5, undefined),
          a = ($__2 = $__1[Symbol.iterator](), ($__3 = $__2.next()).done ? void 0 : $__3.value),
          b = ($__3 = $__2.next()).done ? void 0 : $__3.value,
          c = ($__3 = $__2.next()).done ? void 0 : $__3.value;
      expect(a).toBe("?");
      expect(b).toBe("?");
      expect(c).toBe("?");
    });
    it("works with destructuring", function() {
      var doWork = function(url, $__1) {
        var $__3,
            $__4;
        var $__2 = $__1,
            data = ($__3 = $__2.data) === void 0 ? "Scott" : $__3,
            cache = ($__4 = $__2.cache) === void 0 ? true : $__4;
        return data;
      };
      var result = doWork("api/test", {cache: false});
      expect(result).toBe("?");
    });
  });
  return {};
});
System.get("../spec/defaults.js" + '');
System.registerModule("../spec/destructuring.js", [], function() {
  "use strict";
  var __moduleName = "../spec/destructuring.js";
  describe("destructuring", function() {
    it("can destructure arrays", function() {
      var $__3,
          $__4;
      var doWork = function() {
        return [1, 3, 2];
      };
      var $__2 = doWork(),
          x = ($__3 = $__2[Symbol.iterator](), $__3.next(), ($__4 = $__3.next()).done ? void 0 : $__4.value),
          y = ($__4 = $__3.next()).done ? void 0 : $__4.value,
          z = ($__4 = $__3.next()).done ? void 0 : $__4.value;
      expect(x).toBe("?");
      expect(y).toBe("?");
      expect(z).toBe("?");
    });
    it("can destructure objects", function() {
      var doWork = function() {
        return {
          firstName: "Scott",
          lastName: "Allen",
          handles: {twitter: "OdeToCode"}
        };
      };
      var $__2 = doWork(),
          firstName = $__2.firstName,
          twitter = $__2.handles.twitter;
      expect(firstName).toBe("?");
      expect(twitter).toBe("?");
    });
    it("works with parameters", function() {
      var doWork = function(url, $__2) {
        var $__3 = $__2,
            data = $__3.data,
            cache = $__3.cache,
            headers = $__3.headers;
        return data;
      };
      var result = doWork("api/test", {
        data: "test",
        cache: false
      });
      expect(result).toBe("?");
    });
  });
  return {};
});
System.get("../spec/destructuring.js" + '');
System.registerModule("../spec/let.js", [], function() {
  "use strict";
  var __moduleName = "../spec/let.js";
  describe("how let works", function() {
    it("will provide block scoping, unlike var", function() {
      var doWork = function(flag) {
        if (flag) {
          var x = 3;
          return x;
        }
      };
      var result = doWork(true);
      expect(result).toBe("?");
    });
    it("will provide block scoping with for", function() {
      var doWork = function() {
        for (var i = 0; i < 10; i++) {}
        return 0;
      };
      var result = doWork();
      expect(result).toBe("?");
    });
  });
  return {};
});
System.get("../spec/let.js" + '');
System.registerModule("../spec/rest.js", [], function() {
  "use strict";
  var __moduleName = "../spec/rest.js";
  describe("rest parameters", function() {
    it("is like varargs", function() {
      var doWork = function(name) {
        for (var numbers = [],
            $__1 = 1; $__1 < arguments.length; $__1++)
          numbers[$__1 - 1] = arguments[$__1];
        var result = 0;
        numbers.forEach(function(n) {
          result += n;
        });
        return result;
      };
      var result = doWork("Scott", 1, 2, 3);
      expect(result).toBe("?");
    });
  });
  return {};
});
System.get("../spec/rest.js" + '');
System.registerModule("../spec/spread.js", [], function() {
  "use strict";
  var __moduleName = "../spec/spread.js";
  describe("the spread", function() {
    it("can spread an array across parameters", function() {
      var doWork = function(x, y, z) {
        return x + y + z;
      };
      var result = doWork.apply((void 0), $traceurRuntime.spread([1, 2, 3]));
      expect(result).toBe("?");
    });
    it("can build arrays", function() {
      var a = [4, 5, 6];
      var b = $traceurRuntime.spread([1, 2, 3], a, [7, 8, 9]);
      expect(b).toEqual("?");
    });
  });
  return {};
});
System.get("../spec/spread.js" + '');
System.registerModule("../spec/templates.js", [], function() {
  "use strict";
  var __moduleName = "../spec/templates.js";
  describe("template literals", function() {
    it("can easily combine literals and data", function() {
      var doWork = function(name) {
        return ("Hello, " + name);
      };
      var result = doWork("Scott");
      expect(result).toBe("?");
    });
    it("can help build URLs", function() {
      var category = "music";
      var id = 2112;
      var url = ("http://apiserver/" + category + "/" + id);
      expect(url).toBe("?");
    });
    it("can use tags", function() {
      var upper = function(strings) {
        for (var values = [],
            $__1 = 1; $__1 < arguments.length; $__1++)
          values[$__1 - 1] = arguments[$__1];
        var result = "";
        for (var i = 0; i < strings.length; i++) {
          result += strings[i];
          if (i < values.length) {
            result += values[i];
          }
        }
        return result.toUpperCase();
      };
      var x = 1;
      var y = 3;
      var result = upper($traceurRuntime.getTemplateObject(["", " + ", " is ", ""]), x, y, (x + y));
      expect(result).toBe("?");
    });
  });
  return {};
});
System.get("../spec/templates.js" + '');
