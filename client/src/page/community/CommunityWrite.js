'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var Layout_1 = __importDefault(require('../../common/Layout'));
var CommunityStyle_1 = require('../../style/CommunityStyle');
var react_1 = __importStar(require('react'));
var react_redux_1 = require('react-redux');
var boardSlice_1 = require('../../redux/boardSlice');
var react_router_dom_1 = require('react-router-dom');
var CommuntiySlice_1 = require('../../redux/CommuntiySlice');
var CommunityWrite = function () {
  var dispatch = (0, react_redux_1.useDispatch)();
  var navigate = (0, react_router_dom_1.useNavigate)();
  var _a = (0, react_1.useState)(''),
    title = _a[0],
    setTitle = _a[1];
  var _b = (0, react_1.useState)(''),
    content = _b[0],
    setContent = _b[1];
  var _c = (0, react_1.useState)(''),
    userId = _c[0],
    setUserId = _c[1];
  var goHome = function () {
    navigate('/commu');
  };
  var handleSubmit = function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var titleValue, contentValue;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            titleValue = /^\s*$/.test(title);
            contentValue = /^\s*$/.test(content);
            if (!titleValue) return [3 /*break*/, 1];
            window.alert('제목을 입력해주세요.');
            return [3 /*break*/, 6];
          case 1:
            if (!contentValue) return [3 /*break*/, 2];
            window.alert('내용을 입력해주세요.');
            return [3 /*break*/, 6];
          case 2:
            if (!(title.length > 30)) return [3 /*break*/, 3];
            window.alert('제목은 30자 이내로 작성 가능합니다.');
            return [3 /*break*/, 6];
          case 3:
            if (!(content.length > 3000)) return [3 /*break*/, 4];
            window.alert('내용은 3000자 이내로 작성 가능합니다.');
            return [3 /*break*/, 6];
          case 4:
            return [
              4 /*yield*/,
              dispatch(
                (0, boardSlice_1.submitPost)({
                  title: title,
                  content: content,
                  userId: userId,
                }),
              ),
            ];
          case 5:
            _a.sent();
            dispatch((0, CommuntiySlice_1.GetCommulist)());
            goHome();
            _a.label = 6;
          case 6:
            return [2 /*return*/];
        }
      });
    });
  };
  return react_1.default.createElement(
    Layout_1.default,
    null,
    react_1.default.createElement(
      CommunityStyle_1.CommunityBox,
      null,
      react_1.default.createElement('div', { className: 'doctor-box' }),
      react_1.default.createElement(
        'div',
        { className: 'title-box' },
        react_1.default.createElement(
          'div',
          { className: 'title' },
          '\uC81C\uBAA9',
          userId,
        ),
        react_1.default.createElement('input', {
          value: title,
          onChange: function (e) {
            return setTitle(e.target.value);
          },
        }),
      ),
      react_1.default.createElement(
        'div',
        { className: 'content-box' },
        react_1.default.createElement(
          'div',
          { className: 'content' },
          '\uB0B4\uC6A9',
        ),
        react_1.default.createElement('textarea', {
          value: content,
          onChange: function (e) {
            return setContent(e.target.value);
          },
        }),
        react_1.default.createElement(
          'div',
          { className: 'button-container' },
          react_1.default.createElement(
            'button',
            { className: 'cancel-button', onClick: goHome },
            '\uCDE8\uC18C',
          ),
          react_1.default.createElement(
            'button',
            { className: 'submit-button', onClick: handleSubmit },
            '\uAE00\uC62C\uB9AC\uAE30',
          ),
        ),
      ),
    ),
  );
};
exports.default = CommunityWrite;
