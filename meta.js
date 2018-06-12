const path = require('path')
const fs = require('fs')

const {
  sortDependencies,
  installDependencies,
  runLintFix,
  printMessage,
} = require('./utils')
const pkg = require('./package.json')

const templateVersion = pkg.version


module.exports = {
  helpers: {
    if_or(v1, v2, options) {

      if (v1 || v2) {
        return options.fn(this)
      }

      return options.inverse(this)
    },
    template_version() {
      return templateVersion
    },
  },
  
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: '项目名称:',
    },
    description: {
      type: 'string',
      required: false,
      message: '项目描述:',
      default: 'A Vue.js project',
    },
    author: {
      type: 'string',
      message: '作者:',
    },
    lint: {
      type: 'confirm',
      message: '是否使用ESLint规范你的代码?',
    },
    lintConfig: {
      when: 'lint',
      type: 'list',
      message: '选择ESLint规范',
      choices: [
        {
          name: 'Standard (https://github.com/standard/standard)',
          value: 'standard',
          short: 'Standard',
        },
        {
          name: 'Airbnb (https://github.com/airbnb/javascript)',
          value: 'airbnb',
          short: 'Airbnb',
        },
        {
          name: 'none (自己配置)',
          value: 'none',
          short: 'none',
        },
      ],
    },
    unit: {
      type: 'confirm',
      message: '是否配置单元测试？',
    },
    runner: {
      when: 'unit',
      type: 'list',
      message: '选择单元测试工具',
      choices: [
        {
          name: 'Jest',
          value: 'jest',
          short: 'jest',
        },
        {
          name: 'Karma and Mocha',
          value: 'karma',
          short: 'karma',
        },
        {
          name: 'none (自己配置)',
          value: 'noTest',
          short: 'noTest',
        },
      ],
    },
    e2e: {
      type: 'confirm',
      message: 'Setup e2e tests with Nightwatch?',
    },
    autoInstall: {
      type: 'list',
      message:
        '选择包管理工具（推荐 npm）',
      choices: [
        {
          name: '使用NPM',
          value: 'npm',
          short: 'npm',
        },
        {
          name: '使用Yarn',
          value: 'yarn',
          short: 'yarn',
        },
      ],
    },
    desktopComponent: {
      type: 'list',
      message:
        '选择组件',
      choices: [
        {
          name: 'Element UI',
          value: 'elementui',
          short: 'elementui',
        },
        {
          name: 'iView',
          value: 'iview',
          short: 'iview',
        },
        {
          name: 'none (自己配置)',
          value: 'noTest',
          short: 'noTest',
        }
      ],
    }
  },
  filters: {
    '.eslintrc.js': 'lint',
    '.eslintignore': 'lint',
    'config/test.env.js': 'unit || e2e',
    'build/webpack.test.conf.js': "unit && runner === 'karma'",
    'test/unit/**/*': 'unit',
    'test/unit/index.js': "unit && runner === 'karma'",
    'test/unit/jest.conf.js': "unit && runner === 'jest'",
    'test/unit/karma.conf.js': "unit && runner === 'karma'",
    'test/unit/specs/index.js': "unit && runner === 'karma'",
    'test/unit/setup.js': "unit && runner === 'jest'",
    'test/e2e/**/*': 'e2e'
  },
  complete: function(data, { chalk }) {
    const green = chalk.green

    sortDependencies(data, green)

    const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)

    if (data.autoInstall) {
      installDependencies(cwd, data.autoInstall, green)
        .then(() => {
          return runLintFix(cwd, data, green)
        })
        .then(() => {
          printMessage(data, green)
        })
        .catch(e => {
          console.log(chalk.red('Error:'), e)
        })
    } else {
      printMessage(data, chalk)
    }
  },
}
