import { Plugin } from 'ast-plugin';

const _ = require('lodash');
const { astToText, getChildrenPosition } = require('../helper/ast');

/**
 * Link 内容前后不能有空格
 * no-space-in-link
 */
module.exports = class extends Plugin {

  static get type() {
    return 'no-space-in-link';
  }

  visitor() {
    return {
      link: ast => {
        const text = astToText(ast.node);

        if (_.startsWith(text, ' ') || _.endsWith(text, ' ')) {
          const pos = getChildrenPosition(ast.node);
          this.cfg.throwError({
            ...pos,
            text: `'${text}'`,
            ast
          });
        }
      }
    };
  }
};
