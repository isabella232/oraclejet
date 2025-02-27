import * as ts from 'typescript';
import * as MetaTypes from './MetadataTypes';
export declare function tagNameToElementInterfaceName(tagName: string): string;
export declare function tagNameToElementName(tagName: string): string;
export declare function writebackCallbackToProperty(property: string): string;
export declare function stringToJS(memberName: string, type: ts.SyntaxKind, value: string, metaUtilObj: MetaTypes.MetaUtilObj): any;
export declare function getGenericTypeParameters(propsTypeNode: ts.NodeWithTypeArguments): string;
export declare function getTypeParametersFromType(type: ts.Type, checker: ts.TypeChecker): string;
export declare function getDtMetadata(objWithJsDoc: ts.HasJSDoc, metaUtilObj: MetaTypes.MetaUtilObj, flags?: number): MetaTypes.AllMetadataTypes;
export declare function addMetadataToClassNode(classNode: ts.ClassDeclaration, metadata: MetaTypes.RuntimeMetadata): ts.ClassDeclaration;
export declare function addArgumentsToRegisterCustomElementCall(functionalCompNode: MetaTypes.VCompFunctionalNode, vcompFunctionInfo: MetaTypes.VCompFunctionInfo, metaUtilObj: MetaTypes.MetaUtilObj): MetaTypes.VCompFunctionalNode;
export declare function getPropsInfo(compType: MetaTypes.VCompType, componentName: string, typeRef: ts.TypeReferenceNode, vexportToAlias: MetaTypes.ImportAliases, checker: ts.TypeChecker): MetaTypes.PropsInfo | null;
export declare function getIntersectionTypeNodeInfo(intersectionTypeNode: ts.IntersectionTypeNode, vexportToAlias: MetaTypes.ImportAliases, isInline: boolean, checker: ts.TypeChecker): MetaTypes.IntersectionTypeNodeInfo;
export declare function getMappedTypesInfo(outerType: ts.Type, checker: ts.TypeChecker, isPropsInfo: boolean, outerTypeNode?: ts.TypeNode): MetaTypes.MappedTypesInfo | null;
export declare function isPropsMappedType(type: ts.Type, typeNode?: ts.TypeNode): boolean;
export declare function isAliasToMappedType(type: ts.Type, typeNode: ts.TypeNode): boolean;
export declare function getWrappedReadonlyType(type: ts.Type, typeNode: ts.TypeNode, componentName: string, checker: ts.TypeChecker): ts.Type | null;
export declare function constructMappedTypeName(mappedTypesInfo: MetaTypes.MappedTypesInfo, wrappedTypeGenerics?: string): string;
export declare function isMappedType(type: ts.Type): boolean;
export declare function isConditionalType(type: ts.Type): boolean;
export declare function isObjectType(type: ts.Type): boolean;
export declare function isAnyOrUnknownType(type: ts.Type): boolean;
export declare const _UNION_SPLITTER: RegExp;
export declare function isConditionalTypeNodeDetected(typeNode: ts.TypeNode, seen: Set<string>, metaUtilObj: MetaTypes.MetaUtilObj): boolean;
export declare function walkTypeMembers(type: ts.Type, metaUtilObj: MetaTypes.MetaUtilObj, callback: (memberSymbol: ts.Symbol, memberKey: ts.__String, mappedTypeSymbol?: ts.Symbol) => void): void;
export declare function walkTypeNodeMembers(typeNode: ts.TypeNode, metaUtilObj: MetaTypes.MetaUtilObj, callback: (memberSymbol: ts.Symbol, memberKey: ts.__String, mappedTypeSymbol?: ts.Symbol) => void): void;
export declare function updateCompilerPropsMetadata(propsInfo: MetaTypes.PropsInfo, readOnlyPropNameNodes: MetaTypes.NameNodePair[], metaUtilObj: MetaTypes.MetaUtilObj): void;
export declare function updateCompilerCompMetadata(vcompInfo: MetaTypes.VCompInfo, metaUtilObj: MetaTypes.MetaUtilObj): void;
export declare function pruneCompilerMetadata(metaUtilObj: MetaTypes.MetaUtilObj): void;
export declare function pruneMetadata(metadata: Record<string, any>): void;
export declare function updateRtExtensionMetadata(name: string, value: any, metaUtilObj: MetaTypes.MetaUtilObj): void;
