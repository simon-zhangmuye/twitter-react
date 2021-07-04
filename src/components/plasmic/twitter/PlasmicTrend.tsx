// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wHnxGZq3AxDaQg54kdUukD
// Component: hN3L-jLpsGOU7M
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
import * as sty from "./PlasmicTrend.module.css"; // plasmic-import: hN3L-jLpsGOU7M/css

export type PlasmicTrend__VariantMembers = {};

export type PlasmicTrend__VariantsArgs = {};
type VariantPropType = keyof PlasmicTrend__VariantsArgs;
export const PlasmicTrend__VariantProps = new Array<VariantPropType>();

export type PlasmicTrend__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};

type ArgPropType = keyof PlasmicTrend__ArgsType;
export const PlasmicTrend__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicTrend__OverridesType = {
  root?: p.Flex<"a">;
};

export interface DefaultTrendProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  className?: string;
}

function PlasmicTrend__RenderFunc(props: {
  variants: PlasmicTrend__VariantsArgs;
  args: PlasmicTrend__ArgsType;
  overrides: PlasmicTrend__OverridesType;
  dataFetches?: PlasmicTrend__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <p.Stack
      as={"a"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__d4B7I)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Entertainment",
          value: args.slot,
          className: classNames(sty.slotSlot)
        })}

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box__aCk5H
          )}
        >
          {"·"}
        </div>

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.box___7SsHq
          )}
        >
          {"Yesterday"}
        </div>
      </p.Stack>

      <div className={classNames(defaultcss.all, sty.box__zcCvN)}>
        <div className={classNames(defaultcss.all, sty.box__weVVi)}>
          {p.renderPlasmicSlot({
            defaultContents:
              "Adele shares photo supporting Beyoncé's Black is King",
            value: args.children,
            className: classNames(sty.slotChildren)
          })}
        </div>
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTrend__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTrend__VariantsArgs;
    args?: PlasmicTrend__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicTrend__Fetches;
  } & Omit<PlasmicTrend__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTrend__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicTrend__ArgProps,
      internalVariantPropNames: PlasmicTrend__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicTrend__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTrend";
  } else {
    func.displayName = `PlasmicTrend.${nodeName}`;
  }
  return func;
}

export const PlasmicTrend = Object.assign(
  // Top-level PlasmicTrend renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicTrend
    internalVariantProps: PlasmicTrend__VariantProps,
    internalArgProps: PlasmicTrend__ArgProps
  }
);

export default PlasmicTrend;
/* prettier-ignore-end */
