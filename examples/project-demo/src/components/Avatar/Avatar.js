/**
 * Created by evan on 2017/2/19.
 */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Avatar.css'

const NOOP = () => {
};

/**
 * 头像控件
 * 样例：
 * <code>
 * <Avatar
 * imageUrl={ImageService.getPublicUrl(CurrentDoctor.portraitImg, '80x80')}
 * width={38}
 * height={38}
 * cls={['border']}
 * defaultUrl={require('../../images/doctor-default.png')}/>
 * </code>
 *
 * @author Evan zhanghui451@hys-inc.cn
 * @version 1.0
 */
export default class Avatar extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this._handleImageError = this._handleImageError.bind(this);
        this._handleImageLoaded = this._handleImageLoaded.bind(this);
    }

    /**
     * 处理图片加载成功事件
     * @param e
     * @private
     */
    _handleImageLoaded() {
        //NOTHING TO DO!!
    }

    /**
     * 处理图片加载失败事件
     * @param e
     * @private
     */
    _handleImageError(e) {
        let {defaultUrl} = this.props;
        if (defaultUrl) {
            let target = e.target;
            target.setAttribute('src', defaultUrl);
        }
    }

    render() {
        let {imageUrl, defaultUrl, width, height, cls, onClick} = this.props;
        imageUrl = imageUrl || defaultUrl;
        const extraClassNames = {
            ['es-avatar']: true,
            ['cursor-pointer']: !!onClick
        };
        return (
            <div className={classNames(extraClassNames, cls)}
                 style={{width: width, height: height, minWidth: width, minHeight: height}}
                 onClick={onClick ? onClick : NOOP}>
                <img src={imageUrl} className="es-avatar-img"
                     onLoad={this._handleImageLoaded}
                     onError={this._handleImageError}/>
            </div>
        );
    }
}

Avatar.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    defaultUrl: PropTypes.string,
    cls: PropTypes.any,
    onClick: PropTypes.func
};