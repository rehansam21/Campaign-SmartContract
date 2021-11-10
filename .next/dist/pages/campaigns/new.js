'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\project_directory\\kickstart\\pages\\campaigns\\new.js?entry';
// Link Object is a react component that allows us to render anchor tags into our react.
// Router object allows us to programmatically redirect people from one page to another page inside our app.


var CampaignNew = function (_Component) {
    (0, _inherits3.default)(CampaignNew, _Component);

    function CampaignNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            minimumContribution: '',
            errorMessage: ''
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                // prevent browser from attempting to submit the form
                                event.preventDefault();
                                _context.prev = 1;
                                _context.next = 4;
                                return _web2.default.eth.getAccounts();

                            case 4:
                                accounts = _context.sent;
                                _context.next = 7;
                                return _factory2.default.methods.createCampaign(_this.state.minimumContribution).send({
                                    from: accounts[0]
                                });

                            case 7:
                                _routes.Router.pushRoute('/');
                                _context.next = 13;
                                break;

                            case 10:
                                _context.prev = 10;
                                _context.t0 = _context['catch'](1);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 13:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[1, 10]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, ' Create a Campaign '), _react2.default.createElement('form', { onSubmit: this.onSubmit, error: this.state.errorMessage, 'class': 'ui form', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement('div', { 'class': 'field', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, 'Minimum Contribution'), _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, '          '), _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, '          '), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'wei', labelPosition: 'right', placeholder: 'Minimum Contribution',
                value: this.state.minimumContribution,
                onChange: function onChange(event) {
                    return _this3.setState({ minimumContribution: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }), _react2.default.createElement('button', { 'class': 'ui button', type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'Create')));
        }
    }]);

    return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJMYXlvdXQiLCJmYWN0b3J5Iiwid2ViMyIsIlJvdXRlciIsIkNhbXBhaWduTmV3Iiwic3RhdGUiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwic2V0U3RhdGUiLCJtZXNzYWdlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFNLEFBQVEsQUFBTzs7QUFDOUIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7QUFHakIsQUFBUyxBQUFhOzs7OztBQUZ0QjtBQUNBOzs7SSxBQUdNOzs7Ozs7Ozs7Ozs7Ozs7ME4sQUFDRjtpQ0FBUSxBQUNhLEFBQ3JCOzBCLEFBRlEsQUFFTTtBQUZOLEFBQ1IsaUIsQUFJQTtpR0FBVyxpQkFBQSxBQUFPLE9BQVA7b0JBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1g7QUFDQTtzQ0FGVyxBQUVYLEFBQU07Z0RBRks7Z0RBQUE7dUNBSWdCLGNBQUEsQUFBSyxJQUpyQixBQUlnQixBQUFTOztpQ0FBMUI7QUFKQyxvREFBQTtnREFBQTt5REFLRCxBQUFRLFFBQVIsQUFBZ0IsZUFBZSxNQUFBLEFBQUssTUFBcEMsQUFBMEMscUJBQTFDLEFBQ0Q7MENBQ1MsU0FQUCxBQUtELEFBQ0ksQUFDSSxBQUFTO0FBRGIsQUFDRixpQ0FGRjs7aUNBSU47K0NBQUEsQUFBTyxVQVRBLEFBU1AsQUFBaUI7Z0RBVFY7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBV0g7O3NDQUFBLEFBQUssU0FBUyxFQUFDLGNBQWMsWUFYMUIsQUFXSCxBQUFjLEFBQW1COztpQ0FYOUI7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7Ozs7OztpQ0FrQkY7eUJBQ0w7O21DQUNBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHdDQUFBLGNBQUEsVUFBTSxVQUFZLEtBQWxCLEFBQXVCLFVBQVUsT0FBTyxLQUFBLEFBQUssTUFBN0MsQUFBbUQsY0FBYyxTQUFqRSxBQUF1RTs4QkFBdkU7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxTQUFMLEFBQVc7OEJBQVg7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSx5Q0FBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFGSixBQUVJLEFBQ0EsK0JBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSEosQUFHSSxBQUNBLCtCQUFBLEFBQUM7dUJBQUQsQUFDVSxPQUFNLGVBRGhCLEFBQ2dDLFNBQVEsYUFEeEMsQUFDb0QsQUFDaEQ7dUJBQVMsS0FBQSxBQUFLLE1BRmxCLEFBRXdCLEFBQ3BCOzBCQUNJLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFVLEVBQUUscUJBQXFCLE1BQUEsQUFBTSxPQUFyRCxBQUFTLEFBQWUsQUFBb0M7QUFKcEU7OzhCQUFBO2dDQUxSLEFBQ0ksQUFJSSxBQVFKO0FBUkk7QUFDSSxpQ0FPUixBQUFDLDBDQUFRLE9BQVQsTUFBZ0IsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7OEJBQXBDO2dDQWJKLEFBYUksQUFDQTtBQURBO2dDQUNBLGNBQUEsWUFBUSxTQUFSLEFBQWMsYUFBWSxNQUExQixBQUErQjs4QkFBL0I7Z0NBQUE7QUFBQTtlQWpCUixBQUNBLEFBRUksQUFjSSxBQUtYOzs7OztBLEFBL0NxQixBQWtEMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L3Byb2plY3RfZGlyZWN0b3J5L2tpY2tzdGFydCJ9