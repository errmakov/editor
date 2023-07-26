import { CodeNode } from '@lexical/code'
import { LinkNode } from '@lexical/link'
import { ListItemNode, ListNode } from '@lexical/list'
import { HorizontalRuleNode } from '@lexical/react/LexicalHorizontalRuleNode'
import { HeadingNode, QuoteNode } from '@lexical/rich-text'
import { Klass, LexicalNode, ParagraphNode } from 'lexical'
import * as Mdast from 'mdast'
import { directiveFromMarkdown } from 'mdast-util-directive'
import { frontmatterFromMarkdown } from 'mdast-util-frontmatter'
import { gfmTableFromMarkdown } from 'mdast-util-gfm-table'
import { mdxFromMarkdown } from 'mdast-util-mdx'
import { directive } from 'micromark-extension-directive'
import { frontmatter } from 'micromark-extension-frontmatter'
import { gfmTable } from 'micromark-extension-gfm-table'
import { mdxjs } from 'micromark-extension-mdxjs'
import { AdmonitionNode, LeafDirectiveNode } from '../nodes'
import { CodeBlockNode } from '../plugins/codeblock/CodeBlockNode'
import { MdastCodeVisitor } from '../plugins/codeblock/MdastCodeVisitor'
import { MdastFormattingVisitor } from '../plugins/core/MdastFormattingVisitor'
import { MdastInlineCodeVisitor } from '../plugins/core/MdastInlineCodeVisitor'
import { MdastParagraphVisitor } from '../plugins/core/MdastParagraphVisitor'
import { MdastRootVisitor } from '../plugins/core/MdastRootVisitor'
import { MdastTextVisitor } from '../plugins/core/MdastTextVisitor'
import { FrontmatterNode } from '../plugins/frontmatter/FrontmatterNode'
import { MdastFrontmatterVisitor } from '../plugins/frontmatter/MdastFrontmatterVisitor'
import { MdastHeadingVisitor } from '../plugins/headings/MdastHeadingVisitor'
import { ImageNode } from '../plugins/image/ImageNode'
import { MdastImageVisitor } from '../plugins/image/MdastImageVisitor'
import { MdastMdxJsEsmVisitor } from '../plugins/jsx/MdastMdxJsEsmVisitor'
import { MdastMdxJsxElementVisitor } from '../plugins/jsx/MdastMdxJsxElementVisitor'
import { MdastLinkVisitor } from '../plugins/link/MdastLinkVisitor'
import { MdastListItemVisitor } from '../plugins/lists/MdastListItemVisitor'
import { MdastListVisitor } from '../plugins/lists/MdastListVisitor'
import { MdastBlockQuoteVisitor } from '../plugins/quote/MdastBlockQuoteVisitor'
import { MdastTableVisitor } from '../plugins/table/MdastTableVisitor'
import { TableNode } from '../plugins/table/TableNode'
import { MdastThematicBreakVisitor } from '../plugins/thematic-break/MdastThematicBreakVisitor'
import { MdastAdmonitionVisitor } from './MdastAdmonitionVisitor'
import { MdastLeafDirectiveVisitor } from './MdastLeafDirectiveVisitor'
import { MdastExtension, MdastImportVisitor, SyntaxExtension } from './importMarkdownToLexical'
import { LexicalJsxNode } from '../plugins/jsx/LexicalJsxNode'

export { importMarkdownToLexical, importMdastTreeToLexical } from './importMarkdownToLexical'
export type {
  MarkdownParseOptions,
  MdastExtension,
  MdastImportVisitor,
  MdastTreeImportOptions,
  MdastVisitActions,
  MdastVisitParams,
  SyntaxExtension
} from './importMarkdownToLexical'

export const defaultMdastVisitors: Record<string, MdastImportVisitor<Mdast.Content>> = {
  MdastRootVisitor,
  MdastParagraphVisitor,
  MdastTextVisitor,
  MdastFormattingVisitor,
  MdastInlineCodeVisitor,
  MdastLinkVisitor,
  MdastHeadingVisitor,
  MdastListVisitor,
  MdastListItemVisitor,
  MdastBlockQuoteVisitor,
  MdastCodeVisitor,
  MdastThematicBreakVisitor,
  MdastImageVisitor,
  MdastFrontmatterVisitor,
  MdastAdmonitionVisitor,
  MdastMdxJsEsmVisitor,
  MdastMdxJsxElementVisitor,
  MdastTableVisitor,
  MdastLeafDirectiveVisitor
}

export const defaultMdastExtensions: Record<string, MdastExtension> = {
  mdxFromMarkdown: mdxFromMarkdown(),
  frontmatterFromMarkdown: frontmatterFromMarkdown('yaml'),
  directiveFromMarkdown: directiveFromMarkdown,
  gfmTableFromMarkdown: gfmTableFromMarkdown
}

export const defaultSyntaxExtensions: Record<string, SyntaxExtension> = {
  mdxjs: mdxjs(),
  frontmatter: frontmatter(),
  directive: directive(),
  gfmTable: gfmTable
}

/**
 * The default set of lexical nodes used in the editor.
 */
export const defaultLexicalNodes: Record<string, Klass<LexicalNode>> = {
  ParagraphNode,
  LinkNode,
  HeadingNode,
  QuoteNode,
  ListNode,
  ListItemNode,
  HorizontalRuleNode,
  ImageNode,
  CodeBlockNode,
  FrontmatterNode,
  AdmonitionNode,
  LexicalJsxNode,
  CodeNode, // this one should not be used, but markdown shortcuts complain about it
  TableNode,
  LeafDirectiveNode
}
