import { PluginError } from 'ast-plugin';
import { LooseObject } from './common';


export interface ASTLocation {
  line: number
  column: number
}

export type LintMdFixPlugin = (markdown: string, error: PluginError) => string

export interface LintMdRules {
  [key: string]: LintMdFixPlugin
}

// lint error 的级别
type Severity = 0 | 1 | 2;

type RuleLevel = Severity | 'off' | 'warn' | 'error';


export type RuleLevelAndOptions<Options extends LooseObject = (undefined | LooseObject)> = [RuleLevel, Options];

export type LintMdRuleEntry = RuleLevel | RuleLevelAndOptions

// 用户传入的 lint 配置
export interface LintMdRulesConfig {
  [key: string]: LintMdRuleEntry
}
