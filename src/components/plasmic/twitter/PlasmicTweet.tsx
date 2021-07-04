// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wHnxGZq3AxDaQg54kdUukD
// Component: WE1U4WFutbLmC
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
import Avatar from "../../Avatar"; // plasmic-import: 49qJNWQs-AeXx/component
import ActionButton from "../../ActionButton"; // plasmic-import: B4BDbIyVZXpcb/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_twitter.module.css"; // plasmic-import: wHnxGZq3AxDaQg54kdUukD/projectcss
import * as sty from "./PlasmicTweet.module.css"; // plasmic-import: WE1U4WFutbLmC/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: IN6kBHR7I9QS6/icon
import ReplyIcon from "./icons/PlasmicIcon__Reply"; // plasmic-import: YzvR7zvuPU7JF/icon
import RetweetIcon from "./icons/PlasmicIcon__Retweet"; // plasmic-import: EoOs3_CXbs9KB/icon
import LikeIcon from "./icons/PlasmicIcon__Like"; // plasmic-import: asBC5sU8Mng3f/icon
import ShareIcon from "./icons/PlasmicIcon__Share"; // plasmic-import: u0oPehphmim4o/icon
import image3KUEwXwSm6C0Fy from "./images/image3.png"; // plasmic-import: kUEwXwSm6C0FY/picture

export type PlasmicTweet__VariantMembers = {
  options: "hasReplies";
};

export type PlasmicTweet__VariantsArgs = {
  options?: SingleChoiceArg<"hasReplies">;
};

type VariantPropType = keyof PlasmicTweet__VariantsArgs;
export const PlasmicTweet__VariantProps = new Array<VariantPropType>("options");

export type PlasmicTweet__ArgsType = {
  name?: React.ReactNode;
  username?: React.ReactNode;
  children?: React.ReactNode;
  photo?: React.ReactNode;
  timestamp?: React.ReactNode;
};

type ArgPropType = keyof PlasmicTweet__ArgsType;
export const PlasmicTweet__ArgProps = new Array<ArgPropType>(
  "name",
  "username",
  "children",
  "photo",
  "timestamp"
);

export type PlasmicTweet__OverridesType = {
  root?: p.Flex<"div">;
  avatar?: p.Flex<typeof Avatar>;
};

export interface DefaultTweetProps {
  name?: React.ReactNode;
  username?: React.ReactNode;
  children?: React.ReactNode;
  photo?: React.ReactNode;
  timestamp?: React.ReactNode;
  options?: SingleChoiceArg<"hasReplies">;
  className?: string;
}

function PlasmicTweet__RenderFunc(props: {
  variants: PlasmicTweet__VariantsArgs;
  args: PlasmicTweet__ArgsType;
  overrides: PlasmicTweet__OverridesType;
  dataFetches?: PlasmicTweet__Fetches;
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
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__zRku7)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box___60IJ7)}
        >
          <Avatar
            data-plasmic-name={"avatar"}
            data-plasmic-override={overrides.avatar}
            className={classNames("__wab_instance", sty.avatar)}
          >
            {p.renderPlasmicSlot({
              defaultContents: (
                <img
                  alt={""}
                  className={classNames(defaultcss.img, sty.img__hgUpe)}
                  height={400 as const}
                  role={"img"}
                  src={image3KUEwXwSm6C0Fy}
                  width={400 as const}
                />
              ),

              value: args.photo
            })}
          </Avatar>

          {(hasVariant(variants, "options", "hasReplies") ? true : false) ? (
            <div
              className={classNames(defaultcss.all, sty.box__zQo1X, {
                [sty.box__options_hasReplies__zQo1XuJa0I]: hasVariant(
                  variants,
                  "options",
                  "hasReplies"
                )
              })}
            />
          ) : null}
        </p.Stack>
      </p.Stack>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__gxxfx)}
      >
        <div className={classNames(defaultcss.all, sty.box__l0L5Z)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box___563RX)}
          >
            <div className={classNames(defaultcss.all, sty.box__pav5C)}>
              <div className={classNames(defaultcss.all, sty.box__l4Zkk)}>
                {p.renderPlasmicSlot({
                  defaultContents: "Dan Abramov",
                  value: args.name,
                  className: classNames(sty.slotName)
                })}
              </div>
            </div>

            <div className={classNames(defaultcss.all, sty.box__bdNzf)}>
              {p.renderPlasmicSlot({
                defaultContents: "@dan_abramov",
                value: args.username,
                className: classNames(sty.slotUsername)
              })}
            </div>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__ydQ4V
              )}
            >
              {"·"}
            </div>

            {p.renderPlasmicSlot({
              defaultContents: "9h",
              value: args.timestamp,
              className: classNames(sty.slotTimestamp)
            })}
          </p.Stack>

          <ActionButton
            className={classNames("__wab_instance", sty.actionButton__xzNtr)}
            slot={"25"}
          >
            <IconIcon
              className={classNames(defaultcss.all, sty.svg___7Grom)}
              role={"img"}
            />
          </ActionButton>
        </div>

        <div className={classNames(defaultcss.all, sty.box__sffC)}>
          {p.renderPlasmicSlot({
            defaultContents:
              "Is anyone intentionally using multiple versions of React? (Yeah I know this is generally frowned upon but sometimes you have no other good options for legacy reasons.) I want to know how your build is set up to handle code sharing.",
            value: args.children
          })}
        </div>

        <div className={classNames(defaultcss.all, sty.box__beyx)}>
          <ActionButton
            className={classNames("__wab_instance", sty.actionButton__uf0Mn)}
            options={["labeled"]}
            slot={"25"}
          >
            <ReplyIcon
              className={classNames(defaultcss.all, sty.svg__xSvkk)}
              role={"img"}
            />
          </ActionButton>

          <ActionButton
            className={classNames("__wab_instance", sty.actionButton__na3Pa)}
            options={["labeled"]}
            slot={"25"}
          >
            <RetweetIcon
              className={classNames(defaultcss.all, sty.svg__ygFwk)}
              role={"img"}
            />
          </ActionButton>

          <ActionButton
            className={classNames("__wab_instance", sty.actionButton__lwNyX)}
            options={["labeled"]}
            slot={"25"}
          >
            <LikeIcon
              className={classNames(defaultcss.all, sty.svg__zws5O)}
              role={"img"}
            />
          </ActionButton>

          <ActionButton
            className={classNames("__wab_instance", sty.actionButton__c59We)}
            slot={"25"}
          >
            <ShareIcon
              className={classNames(defaultcss.all, sty.svg__zfeui)}
              role={"img"}
            />
          </ActionButton>
        </div>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "avatar"],
  avatar: ["avatar"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  avatar: typeof Avatar;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTweet__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTweet__VariantsArgs;
    args?: PlasmicTweet__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicTweet__Fetches;
  } & Omit<PlasmicTweet__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTweet__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicTweet__ArgProps,
      internalVariantPropNames: PlasmicTweet__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicTweet__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTweet";
  } else {
    func.displayName = `PlasmicTweet.${nodeName}`;
  }
  return func;
}

export const PlasmicTweet = Object.assign(
  // Top-level PlasmicTweet renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    avatar: makeNodeComponent("avatar"),

    // Metadata about props expected for PlasmicTweet
    internalVariantProps: PlasmicTweet__VariantProps,
    internalArgProps: PlasmicTweet__ArgProps
  }
);

export default PlasmicTweet;
/* prettier-ignore-end */