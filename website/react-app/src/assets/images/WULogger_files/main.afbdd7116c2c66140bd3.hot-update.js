webpackHotUpdate("main",{

/***/ "./src/pages/Signup/Signup.jsx":
/*!*************************************!*\
  !*** ./src/pages/Signup/Signup.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Signup_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Signup.css */ "./src/pages/Signup/Signup.css");
/* harmony import */ var _Signup_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Signup_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/brad/Documents/washU/xctf/wulogger/website/react-app/src/pages/Signup/Signup.jsx";




function validateEmail(email) {
  var email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email_regex.test(String(email).toLowerCase());
} //password validator checks for 1 lower, 1 upper, 1 digit, 1 special, at least 6 letter long


function validatePassword(password) {
  var password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;
  return password_regex.test(String(password));
}

class Signup extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.formIsValid = () => {
      if (this.state.email === "") {
        this.setState({
          errorMessage: "Email field is required."
        });
        return false;
      }

      if (!validateEmail(this.state.email)) {
        this.setState({
          errorMessage: "Email invalid, should be in format you@example.com"
        });
        return false;
      }

      if (this.state.password === "") {
        this.setState({
          errorMessage: "Password field is required."
        });
        return false;
      }

      this.setState({
        errorMessage: ""
      });
      return true;
    };

    this.login = event => {
      event.preventDefault();
      console.log("login");
    };

    this.signup = event => {
      event.preventDefault();

      if (this.formIsValid()) {
        //TODO auth with AWS cognito
        console.log("Form is valid");
      } else {
        console.log(this.state.errorMessage);
      }
    };

    this.updateState = event => {
      this.setState({
        [event.target.name]: String(event.target.value)
      });
    };

    this.state = {
      email: "",
      password: "",
      errorMessage: ""
    };
  }

  componentDidMount() {
    this.setState(state => ({}));
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "padding dark-text center-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, "Create a New Account"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      onChange: this.updateState,
      type: "text",
      name: "firstName",
      placeholder: "First Name",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      onChange: this.updateState,
      type: "text",
      name: "lastName",
      placeholder: "Last Name",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      onChange: this.updateState,
      type: "email",
      name: "email",
      placeholder: "Email",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      onChange: this.updateState,
      type: "password",
      name: "password",
      placeholder: "Password",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      onChange: this.updateState,
      type: "password",
      name: "renterPassword",
      placeholder: "Reenter Password",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "error-message",
      ref: "errorMessage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, this.state.errorMessage), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "button box",
      onClick: this.signup,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, "Create Account"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "button box light",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, "Login"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ })

})
//# sourceMappingURL=main.afbdd7116c2c66140bd3.hot-update.js.map