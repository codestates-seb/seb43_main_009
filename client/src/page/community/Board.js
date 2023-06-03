'use strict';
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
var react_router_dom_1 = require('react-router-dom');
var react_1 = __importDefault(require('react'));
var react_2 = require('react');
var react_3 = require('react');
var react_redux_1 = require('react-redux');
var boardSlice_1 = require('../../redux/boardSlice');
var UserInfo_1 = require('../../utils/UserInfo');
var BoardStyle_1 = require('../../style/BoardStyle');
var Board = function () {
  var dispatch = (0, react_redux_1.useDispatch)();
  var navigate = (0, react_router_dom_1.useNavigate)();
  // const boardData = useSelector((state) => state.board.data);
  // const boardStatus = useSelector((state) => state.board.status);
  // const boardError = useSelector((state) => state.board.error);
  var boardData = (0, react_redux_1.useSelector)(function (state) {
    return state.board.data;
  });
  var boardStatus = (0, react_redux_1.useSelector)(function (state) {
    return state.board.status;
  });
  var boardError = (0, react_redux_1.useSelector)(function (state) {
    return state.board.error;
  });
  // const submitData = useSelector((state) => state.counter.data);
  // const submitStatus = useSelector((state) => state.counter.status);
  var commuId = (0, react_router_dom_1.useParams)().commuId;
  var _a = (0, react_2.useState)(false),
    showEditForm = _a[0],
    setShowEditForm = _a[1];
  var _b = (0, react_2.useState)(''),
    editedTitle = _b[0],
    setEditedTitle = _b[1];
  var _c = (0, react_2.useState)(''),
    editedContent = _c[0],
    setEditedContent = _c[1];
  var _d = (0, react_2.useState)(''),
    comment = _d[0],
    setComment = _d[1];
  var userInfo = (0, UserInfo_1.getUserInfo)();
  var userId = userInfo && userInfo.userId;
  (0, react_2.useEffect)(
    function () {
      {
        dispatch((0, boardSlice_1.fetchBoardData)(commuId));
        dispatch((0, boardSlice_1.checkToken)());
      }
    },
    [dispatch, commuId],
  );
  var commentList = (boardData.comments || []).slice();
  var formatDate = function (dateString) {
    var date = new Date(dateString);
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString().padStart(2, '0'); // 2자리 숫자로 표시
    var day = date.getDate().toString().padStart(2, '0');
    var hour = date.getHours().toString().padStart(2, '0');
    var minute = date.getMinutes().toString().padStart(2, '0');
    return ''
      .concat(year, '/')
      .concat(month, '/')
      .concat(day, ' ')
      .concat(hour, ':')
      .concat(minute);
  };
  var handleSubmitComment = (0, react_3.useCallback)(
    function () {
      if (comment.trim() === '') {
        // 댓글 내용이 비어있는 경우
        alert('댓글 내용을 입력해주세요.');
        return;
      }
      var token = localStorage.getItem('accessToken');
      if (token === null) {
        alert('로그인정보가 없습니다. 다시 로그인 해주세요.');
        navigate('/login');
      }
      dispatch(
        (0, boardSlice_1.submitComment)({
          commuId: boardData.commuId,
          comment: comment,
        }),
      )
        .then(function () {
          setComment('');
        })
        .catch(function (error) {
          console.error(error);
          navigate('/signup');
        });
    },
    [dispatch, boardData.commuId, comment, navigate],
  );
  //수정
  var handleEditClick = function () {
    setShowEditForm(true);
    setEditedTitle(boardData.title);
    setEditedContent(boardData.content);
  };
  //수정 저장
  var handleSaveEdit = (0, react_3.useCallback)(
    function () {
      dispatch(
        (0, boardSlice_1.updatePost)({
          commuId: boardData.commuId,
          title: editedTitle,
          content: editedContent,
        }),
      ).then(function () {
        dispatch((0, boardSlice_1.fetchBoardData)(boardData.commuId));
      });
      setShowEditForm(false);
    },
    [dispatch, boardData.commuId, editedTitle, editedContent],
  );
  //게시글이 삭제 전에 확인메세지를 표시하고, 삭제가 완료된 후에 페이지 이동
  //혹시 delete확인이 필요하지 않다면 navigate hook을 제거할 것
  var handleDeletePost = (0, react_3.useCallback)(
    function () {
      return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!window.confirm('정말로 이 게시글을 삭제하시겠습니까?'))
                return [3 /*break*/, 2];
              return [
                4 /*yield*/,
                dispatch((0, boardSlice_1.deletePost)(boardData.commuId)),
              ];
            case 1:
              _a.sent();
              navigate('/commu');
              _a.label = 2;
            case 2:
              return [2 /*return*/];
          }
        });
      });
    },
    [dispatch, navigate, boardData.commuId],
  );
  var handleImgClick = function () {
    var token = localStorage.getItem('accessToken');
    if (token === null) {
      alert('가입정보가 없습니다. 로그인 페이지로 이동합니다.');
      navigate('/login');
    } else {
      navigate('/commu/posts', { replace: true });
    }
  };
  return react_1.default.createElement(
    Layout_1.default,
    null,
    react_1.default.createElement(
      BoardStyle_1.CommunityBox,
      null,
      react_1.default.createElement(BoardStyle_1.ImgBox, {
        onClick: handleImgClick,
      }),
      react_1.default.createElement(
        'div',
        { className: 'up-box' },
        react_1.default.createElement(
          'div',
          { className: 'title-box' },
          react_1.default.createElement(
            'div',
            { className: 'button-box' },
            react_1.default.createElement('img', {
              src: boardData.userProfileImageUrl,
              alt: boardData.displayName,
              style: {
                width: '40px',
                height: '40px',
                borderRadius: '50%',
              },
            }),
            react_1.default.createElement(
              'span',
              null,
              '\uC791\uC131\uC790 : ',
              boardData.displayName,
            ),
            react_1.default.createElement(
              'div',
              null,
              showEditForm
                ? react_1.default.createElement(
                    react_1.default.Fragment,
                    null,
                    react_1.default.createElement(
                      'button',
                      { onClick: handleSaveEdit },
                      '\uC800\uC7A5',
                    ),
                    react_1.default.createElement(
                      'button',
                      {
                        onClick: function () {
                          return setShowEditForm(false);
                        },
                      },
                      '\uCDE8\uC18C',
                    ),
                  )
                : react_1.default.createElement(
                    react_1.default.Fragment,
                    null,
                    userId === boardData.userId && // 만약 게시글 작성자와 로그인한 사용자가 같다면 버튼을 보여줍니다.
                      react_1.default.createElement(
                        react_1.default.Fragment,
                        null,
                        react_1.default.createElement(
                          'button',
                          { onClick: handleEditClick },
                          '\uAC8C\uC2DC\uAE00 \uC218\uC815',
                        ),
                        react_1.default.createElement(
                          'button',
                          { onClick: handleDeletePost },
                          '\uAC8C\uC2DC\uAE00 \uC0AD\uC81C',
                        ),
                      ),
                  ),
            ),
          ),
          react_1.default.createElement(
            'div',
            { className: 'form-box' },
            showEditForm
              ? react_1.default.createElement(
                  'div',
                  { className: 'retouch-box' },
                  react_1.default.createElement(
                    'div',
                    { className: 'retouch-title' },
                    react_1.default.createElement('span', null, '\uC81C\uBAA9'),
                    react_1.default.createElement('input', {
                      type: 'text',
                      value: editedTitle,
                      onChange: function (e) {
                        return setEditedTitle(e.target.value);
                      },
                    }),
                  ),
                  react_1.default.createElement(
                    'div',
                    { className: 'retouch-content' },
                    react_1.default.createElement(
                      'span',
                      null,
                      '\uB0B4\uC6A9',
                      react_1.default.createElement('br', null),
                      react_1.default.createElement('br', null),
                    ),
                    react_1.default.createElement('textarea', {
                      value: editedContent,
                      onChange: function (e) {
                        return setEditedContent(e.target.value);
                      },
                    }),
                  ),
                )
              : boardStatus === 'succeeded' &&
                  react_1.default.createElement(
                    'div',
                    { className: 'content' },
                    react_1.default.createElement(
                      'h3',
                      null,
                      '\uC81C\uBAA9 : ',
                      boardData.title,
                    ),
                    react_1.default.createElement(
                      'span',
                      null,
                      '\uB0B4\uC6A9 : ',
                      boardData.content,
                    ),
                    react_1.default.createElement(
                      'div',
                      { className: 'post-info' },
                      react_1.default.createElement(
                        'span',
                        null,
                        '\uC791\uC131\uC2DC\uAC04: ',
                        formatDate(boardData.createAt),
                      ),
                      react_1.default.createElement(
                        'span',
                        null,
                        '\uC870\uD68C\uC218: ',
                        boardData.view,
                      ),
                    ),
                  ),
            boardStatus === 'failed' &&
              react_1.default.createElement(
                'div',
                null,
                react_1.default.createElement('p', null, 'Error: ', boardError),
              ),
          ),
        ),
      ),
      react_1.default.createElement(
        'div',
        { className: 'down-box' },
        react_1.default.createElement(
          'div',
          { className: 'comment-content' },
          boardStatus === 'succeeded' &&
            react_1.default.createElement(
              'div',
              null,
              commentList.map(function (comment) {
                return react_1.default.createElement(
                  'div',
                  { key: comment.commentId, className: 'comment' },
                  react_1.default.createElement(
                    'div',
                    { className: 'comment-text' },
                    react_1.default.createElement(
                      BoardStyle_1.Author,
                      null,
                      comment.displayName,
                    ),
                    react_1.default.createElement(
                      BoardStyle_1.CommentText,
                      null,
                      comment.comment,
                    ),
                  ),
                  react_1.default.createElement(
                    'div',
                    null,
                    react_1.default.createElement(
                      BoardStyle_1.Timestamp,
                      null,
                      formatDate(comment.createAt),
                    ),
                  ),
                );
              }),
            ),
        ),
        react_1.default.createElement(
          'div',
          { className: 'write-box' },
          react_1.default.createElement('input', {
            type: 'text',
            value: comment,
            onChange: function (e) {
              return setComment(e.target.value);
            },
            onKeyDown: function (e) {
              if (e.key === 'Enter') {
                handleSubmitComment();
                e.preventDefault();
              }
            },
            placeholder: '\uB313\uAE00\uC744 \uC785\uB825\uD558\uC138\uC694',
          }),
          react_1.default.createElement(
            'button',
            { onClick: handleSubmitComment },
            '\uB313\uAE00\uB2EC\uAE30',
          ),
        ),
      ),
    ),
  );
};
exports.default = Board;
