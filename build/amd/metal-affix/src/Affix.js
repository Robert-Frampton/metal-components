define(['exports', 'metal/src/metal', 'metal-dom/src/all/dom', 'metal-state/src/all/state', 'metal-events/src/events', 'metal-position/src/all/position'], function (exports, _metal, _dom, _state, _events, _position) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _metal2 = _interopRequireDefault(_metal);

	var _state2 = _interopRequireDefault(_state);

	var _events2 = _interopRequireDefault(_events);

	var _position2 = _interopRequireDefault(_position);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	var _get = function get(object, property, receiver) {
		if (object === null) object = Function.prototype;
		var desc = Object.getOwnPropertyDescriptor(object, property);

		if (desc === undefined) {
			var parent = Object.getPrototypeOf(object);

			if (parent === null) {
				return undefined;
			} else {
				return get(parent, property, receiver);
			}
		} else if ("value" in desc) {
			return desc.value;
		} else {
			var getter = desc.get;

			if (getter === undefined) {
				return undefined;
			}

			return getter.call(receiver);
		}
	};

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Affix = function (_State) {
		_inherits(Affix, _State);

		/**
   * @inheritDoc
   */
		function Affix(opt_config) {
			_classCallCheck(this, Affix);

			var _this = _possibleConstructorReturn(this, (Affix.__proto__ || Object.getPrototypeOf(Affix)).call(this, opt_config));

			if (!Affix.emitter_) {
				Affix.emitter_ = new _events2.default();
				Affix.proxy_ = new _dom.DomEventEmitterProxy(document, Affix.emitter_, null, {
					scroll: true
				});
			}

			/**
    * Holds the last position.
    * @type {Position.Bottom|Position.Default|Position.Top}
    * @private
    */
			_this.lastPosition_ = null;

			/**
    * Holds event handle that listens scroll shared event emitter proxy.
    * @type {EventHandle}
    * @protected
    */
			_this.scrollHandle_ = Affix.emitter_.on('scroll', _this.checkPosition.bind(_this));

			_this.on('elementChanged', _this.checkPosition);
			_this.on('offsetTopChanged', _this.checkPosition);
			_this.on('offsetBottomChanged', _this.checkPosition);
			_this.checkPosition();
			return _this;
		}

		/**
   * @inheritDoc
   */


		_createClass(Affix, [{
			key: 'disposeInternal',
			value: function disposeInternal() {
				_dom.dom.removeClasses(this.element, Affix.Position.Bottom + ' ' + Affix.Position.Default + ' ' + Affix.Position.Top);
				this.scrollHandle_.dispose();
				_get(Affix.prototype.__proto__ || Object.getPrototypeOf(Affix.prototype), 'disposeInternal', this).call(this);
			}
		}, {
			key: 'checkPosition',
			value: function checkPosition() {
				if (this.intersectTopRegion()) {
					this.syncPosition(Affix.Position.Top);
				} else if (this.intersectBottomRegion()) {
					this.syncPosition(Affix.Position.Bottom);
				} else {
					this.syncPosition(Affix.Position.Default);
				}
			}
		}, {
			key: 'intersectBottomRegion',
			value: function intersectBottomRegion() {
				if (!_metal2.default.isDef(this.offsetBottom)) {
					return false;
				}
				var clientHeight = _position2.default.getHeight(this.scrollElement);
				var scrollElementClientHeight = _position2.default.getClientHeight(this.scrollElement);
				return _position2.default.getScrollTop(this.scrollElement) + scrollElementClientHeight >= clientHeight - this.offsetBottom;
			}
		}, {
			key: 'intersectTopRegion',
			value: function intersectTopRegion() {
				if (!_metal2.default.isDef(this.offsetTop)) {
					return false;
				}
				return _position2.default.getScrollTop(this.scrollElement) <= this.offsetTop;
			}
		}, {
			key: 'syncPosition',
			value: function syncPosition(position) {
				if (this.lastPosition_ !== position) {
					_dom.dom.addClasses(this.element, position);
					_dom.dom.removeClasses(this.element, this.lastPosition_);
					this.lastPosition_ = position;
				}
			}
		}]);

		return Affix;
	}(_state2.default);

	/**
  * Holds positions enum.
  * @enum {string}
  */
	Affix.Position = {
		Top: 'affix-top',
		Bottom: 'affix-bottom',
		Default: 'affix'
	};

	Affix.STATE = {
		/**
   * The scrollElement element to be used as scrollElement area for affix. The scrollElement is
   * where the scroll event is listened from.
   * @type {Element|Window}
   */
		scrollElement: {
			setter: _dom.dom.toElement,
			value: document
		},

		/**
   * Defines the offset bottom that triggers affix.
   * @type {number}
   */
		offsetTop: {
			validator: _metal2.default.isNumber
		},

		/**
   * Defines the offset top that triggers affix.
   * @type {number}
   */
		offsetBottom: {
			validator: _metal2.default.isNumber
		},

		/**
   * Element to be used as alignment reference of affix.
   * @type {Element}
   */
		element: {
			setter: _dom.dom.toElement
		}
	};

	exports.default = Affix;
});
//# sourceMappingURL=Affix.js.map