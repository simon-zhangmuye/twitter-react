// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wHnxGZq3AxDaQg54kdUukD
// Component: mRTzxsliFRRLQ5
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_twitter.module.css"; // plasmic-import: wHnxGZq3AxDaQg54kdUukD/projectcss
import * as sty from "./PlasmicSpacer.module.css"; // plasmic-import: mRTzxsliFRRLQ5/css

export type PlasmicSpacer__VariantMembers = {};

export type PlasmicSpacer__VariantsArgs = {};
type VariantPropType = keyof PlasmicSpacer__VariantsArgs;
export const PlasmicSpacer__VariantProps = new Array<VariantPropType>();

export type PlasmicSpacer__ArgsType = {};
type ArgPropType = keyof PlasmicSpacer__ArgsType;
export const PlasmicSpacer__ArgProps = new Array<ArgPropType>();

export type PlasmicSpacer__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultSpacerProps {
  className?: string;
}

function PlasmicSpacer__RenderFunc(props: {
  variants: PlasmicSpacer__VariantsArgs;
  args: PlasmicSpacer__ArgsType;
  overrides: PlasmicSpacer__OverridesType;
  dataFetches?: PlasmicSpacer__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSpacer__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSpacer__VariantsArgs;
    args?: PlasmicSpacer__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicSpacer__Fetches;
  } & Omit<PlasmicSpacer__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSpacer__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSpacer__ArgProps,
      internalVariantPropNames: PlasmicSpacer__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicSpacer__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSpacer";
  } else {
    func.displayName = `PlasmicSpacer.${nodeName}`;
  }
  return func;
}

export const PlasmicSpacer = Object.assign(
  // Top-level PlasmicSpacer renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicSpacer
    internalVariantProps: PlasmicSpacer__VariantProps,
    internalArgProps: PlasmicSpacer__ArgProps
  }
);

export default PlasmicSpacer;
/* prettier-ignore-end */
