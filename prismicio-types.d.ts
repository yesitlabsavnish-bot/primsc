import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };


type PickContentRelationshipFieldData<
	TRelationship extends prismic.CustomTypeModelFetchCustomTypeLevel1 | prismic.CustomTypeModelFetchCustomTypeLevel2 | prismic.CustomTypeModelFetchGroupLevel1 | prismic.CustomTypeModelFetchGroupLevel2,
	TData extends Record<string, prismic.AnyRegularField | prismic.GroupField | prismic.NestedGroupField | prismic.SliceZone>,
	TLang extends string
> = |
	// Content relationship fields
	{
		[TSubRelationship in Extract<
			TRelationship["fields"][number], prismic.CustomTypeModelFetchContentRelationshipLevel1
		> as TSubRelationship["id"]]:
			ContentRelationshipFieldWithData<TSubRelationship["customtypes"], TLang>;
	} &
	// Group
	{
		[TGroup in Extract<
			TRelationship["fields"][number], prismic.CustomTypeModelFetchGroupLevel1 | prismic.CustomTypeModelFetchGroupLevel2
		> as TGroup["id"]]:
			TData[TGroup["id"]] extends prismic.GroupField<infer TGroupData>
				? prismic.GroupField<PickContentRelationshipFieldData<TGroup, TGroupData, TLang>>
				: never
	} &
	// Other fields
	{
		[TFieldKey in Extract<TRelationship["fields"][number], string>]:
			TFieldKey extends keyof TData ? TData[TFieldKey] : never;
	};

type ContentRelationshipFieldWithData<
	TCustomType extends readonly (prismic.CustomTypeModelFetchCustomTypeLevel1 | string)[] | readonly (prismic.CustomTypeModelFetchCustomTypeLevel2 | string)[],
	TLang extends string = string
> = {
	[ID in Exclude<TCustomType[number], string>["id"]]:
		prismic.ContentRelationshipField<
			ID,
			TLang,
			PickContentRelationshipFieldData<
				Extract<TCustomType[number], { id: ID }>,
				Extract<prismic.Content.AllDocumentTypes, { type: ID }>["data"],
				TLang
			>
		>
}[Exclude<TCustomType[number], string>["id"]];

/**
 * Item in *About_us → Built card*
 */
export interface AboutUsDocumentDataBuiltCardItem {
	/**
	 * Built card image field in *About_us → Built card*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.built_card[].built_card_image
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	built_card_image: prismic.ImageField<never>;
	
	/**
	 * Built card number field in *About_us → Built card*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.built_card[].built_card_number
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	built_card_number: prismic.KeyTextField;
	
	/**
	 * built card title field in *About_us → Built card*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.built_card[].built_card_title
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	built_card_title: prismic.KeyTextField;
	
	/**
	 * built card desc field in *About_us → Built card*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.built_card[].built_card_desc
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	built_card_desc: prismic.KeyTextField;
}

/**
 * Item in *About_us → Path Flow*
 */
export interface AboutUsDocumentDataPathFlowItem {
	/**
	 * path flow title field in *About_us → Path Flow*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.path_flow[].path_flow_title
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	path_flow_title: prismic.KeyTextField;
	
	/**
	 * pathflow subtitle field in *About_us → Path Flow*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.path_flow[].pathflow_subtitle
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	pathflow_subtitle: prismic.KeyTextField;
	
	/**
	 * path flow image field in *About_us → Path Flow*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.path_flow[].path_flow_image
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	path_flow_image: prismic.ImageField<never>;
}

/**
 * Content for About_us documents
 */
interface AboutUsDocumentData {
	/**
	 * Hero Title field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.hero_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	hero_title: prismic.KeyTextField;
	
	/**
	 * Hero Description 1 field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.hero_description_1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	hero_description_1: prismic.KeyTextField;
	
	/**
	 * Hero Description 2 field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.hero_description_2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	hero_description_2: prismic.KeyTextField;
	
	/**
	 * Material image field in *About_us*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.material_image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	material_image: prismic.ImageField<never>;
	
	/**
	 * Material head field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.material_head
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	material_head: prismic.KeyTextField;
	
	/**
	 * Material head b field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.material_head_b
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	material_head_b: prismic.KeyTextField;
	
	/**
	 * Material desc1 field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.material_desc1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	material_desc1: prismic.KeyTextField;
	
	/**
	 * Material desc1b field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.material_desc1b
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	material_desc1b: prismic.KeyTextField;
	
	/**
	 * Material desc1a field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.material_desc1a
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	material_desc1a: prismic.KeyTextField;
	
	/**
	 * Material desc2 field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.material_desc2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	material_desc2: prismic.KeyTextField;
	
	/**
	 * Material desc3 field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.material_desc3
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	material_desc3: prismic.KeyTextField;
	
	/**
	 * Material desc3 b field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.material_desc3_b
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	material_desc3_b: prismic.KeyTextField;
	
	/**
	 * Built heading field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.built_heading
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	built_heading: prismic.KeyTextField;
	
	/**
	 * Built subtitle1 field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.built_subtitle1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	built_subtitle1: prismic.KeyTextField;
	
	/**
	 * Built subtitle2 field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.built_subtitle2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	built_subtitle2: prismic.KeyTextField;
	
	/**
	 * Built subtitle3 field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.built_subtitle3
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	built_subtitle3: prismic.KeyTextField;
	
	/**
	 * Built subtitle4 field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.built_subtitle4
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	built_subtitle4: prismic.KeyTextField;
	
	/**
	 * Built card field in *About_us*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.built_card[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	built_card: prismic.GroupField<Simplify<AboutUsDocumentDataBuiltCardItem>>;
	
	/**
	 * built desc field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.built_desc
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	built_desc: prismic.KeyTextField;
	
	/**
	 * Path heading field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.path_heading
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	path_heading: prismic.KeyTextField;
	
	/**
	 * path desc1 field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.path_desc1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	path_desc1: prismic.KeyTextField;
	
	/**
	 * path desc2 field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.path_desc2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	path_desc2: prismic.KeyTextField;
	
	/**
	 * path desc3 field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.path_desc3
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	path_desc3: prismic.KeyTextField;
	
	/**
	 * Path Flow field in *About_us*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.path_flow[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	path_flow: prismic.GroupField<Simplify<AboutUsDocumentDataPathFlowItem>>;
	
	/**
	 * Expertise image field in *About_us*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.expertise_image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	expertise_image: prismic.ImageField<never>;
	
	/**
	 * Expertise heading1 field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.expertise_heading1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	expertise_heading1: prismic.KeyTextField;
	
	/**
	 * Expertise heading2 field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.expertise_heading2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	expertise_heading2: prismic.KeyTextField;
	
	/**
	 * Expertise desc1 field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.expertise_desc1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	expertise_desc1: prismic.KeyTextField;
	
	/**
	 * Expertise desc2 field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.expertise_desc2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	expertise_desc2: prismic.KeyTextField;
	
	/**
	 * Expertise desc3 field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.expertise_desc3
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	expertise_desc3: prismic.KeyTextField;
	
	/**
	 * Expertise desc4 field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.expertise_desc4
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	expertise_desc4: prismic.KeyTextField;
	
	/**
	 * Meet Image field in *About_us*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.meet_image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	meet_image: prismic.ImageField<never>;
	
	/**
	 * Meet heading field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.meet_heading
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	meet_heading: prismic.KeyTextField;
	
	/**
	 * Meet desc1 field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.meet_desc1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	meet_desc1: prismic.KeyTextField;
	
	/**
	 * Meet desc2 field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.meet_desc2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	meet_desc2: prismic.KeyTextField;
	
	/**
	 * Meet desc3 field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.meet_desc3
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	meet_desc3: prismic.KeyTextField;
	
	/**
	 * Talk heading field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.talk_heading
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	talk_heading: prismic.KeyTextField;
	
	/**
	 * Talk desc1 field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.talk_desc1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	talk_desc1: prismic.KeyTextField;
	
	/**
	 * Talk desc2 field in *About_us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.talk_desc2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	talk_desc2: prismic.KeyTextField;
}

/**
 * About_us document from Prismic
 *
 * - **API ID**: `about_us`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/content-modeling
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutUsDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<AboutUsDocumentData>, "about_us", Lang>;

/**
 * Item in *Blog → sidebar-links-list*
 */
export interface BlogDocumentDataSidebarLinksListItem {
	/**
	 * Title field in *Blog → sidebar-links-list*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blog.sidebar_links_list[].title
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	title: prismic.KeyTextField;
	
	/**
	 * redirection field in *Blog → sidebar-links-list*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blog.sidebar_links_list[].redirection
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	redirection: prismic.KeyTextField;
}

/**
 * Content for Blog documents
 */
interface BlogDocumentData {
	/**
	 * Title field in *Blog*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blog.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	title: prismic.KeyTextField;
	
	/**
	 * Description field in *Blog*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blog.description
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	description: prismic.KeyTextField;
	
	/**
	 * Featured Image field in *Blog*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blog.featured_image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	featured_image: prismic.ImageField<never>;
	
	/**
	 * Author Name field in *Blog*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blog.author_name
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	author_name: prismic.KeyTextField;
	
	/**
	 * Author Image field in *Blog*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blog.author_image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	author_image: prismic.ImageField<never>;
	
	/**
	 * Publication Date field in *Blog*
	 *
	 * - **Field Type**: Date
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blog.publication_date
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/date
	 */
	publication_date: prismic.DateField;
	
	/**
	 * Category field in *Blog*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blog.category
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	category: prismic.KeyTextField;
	
	/**
	 * Content field in *Blog*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blog.content
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	content: prismic.RichTextField;
	
	/**
	 * sidebar-links-list field in *Blog*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blog.sidebar_links_list[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	sidebar_links_list: prismic.GroupField<Simplify<BlogDocumentDataSidebarLinksListItem>>;
	
	/**
	 * contact_title field in *Blog*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blog.contact_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	contact_title: prismic.KeyTextField;
	
	/**
	 * email field in *Blog*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blog.email
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	email: prismic.KeyTextField;
	
	/**
	 * number field in *Blog*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blog.number
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	number: prismic.KeyTextField;
}

/**
 * Blog document from Prismic
 *
 * - **API ID**: `blog`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/content-modeling
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<BlogDocumentData>, "blog", Lang>;

/**
 * Content for blogpage documents
 */
interface BlogpageDocumentData {
	/**
	 * background image field in *blogpage*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blogpage.background_image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	background_image: prismic.ImageField<never>;
	
	/**
	 * blog_title field in *blogpage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blogpage.blog_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	blog_title: prismic.KeyTextField;
	
	/**
	 * blog_descriptipon field in *blogpage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: blogpage.blog_descriptipon
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	blog_descriptipon: prismic.KeyTextField;
}

/**
 * blogpage document from Prismic
 *
 * - **API ID**: `blogpage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/content-modeling
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogpageDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<BlogpageDocumentData>, "blogpage", Lang>;

/**
 * Item in *chhopedCarbon → phlex-options-card*
 */
export interface ChhopedCarbonDocumentDataPhlexOptionsCardItem {
	/**
	 * phlex-options-card-img field in *chhopedCarbon → phlex-options-card*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.phlex_options_card[].phlex_options_card_img
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	phlex_options_card_img: prismic.ImageField<never>;
	
	/**
	 * phlex-options-number field in *chhopedCarbon → phlex-options-card*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.phlex_options_card[].phlex_options_number
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_options_number: prismic.KeyTextField;
	
	/**
	 * phlex-options-card-title field in *chhopedCarbon → phlex-options-card*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.phlex_options_card[].phlex_options_card_title
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_options_card_title: prismic.KeyTextField;
	
	/**
	 * phlex-options-card-title-str field in *chhopedCarbon → phlex-options-card*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.phlex_options_card[].phlex_options_card_title_str
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_options_card_title_str: prismic.KeyTextField;
	
	/**
	 * phlex-options-card-text1 field in *chhopedCarbon → phlex-options-card*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.phlex_options_card[].phlex_options_card_text1
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_options_card_text1: prismic.KeyTextField;
	
	/**
	 * phlex-options-card-text2 field in *chhopedCarbon → phlex-options-card*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.phlex_options_card[].phlex_options_card_text2
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_options_card_text2: prismic.KeyTextField;
	
	/**
	 * phlex-options-card-overlay field in *chhopedCarbon → phlex-options-card*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.phlex_options_card[].phlex_options_card_overlay
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_options_card_overlay: prismic.KeyTextField;
	
	/**
	 * phlex-options-card-datasheet field in *chhopedCarbon → phlex-options-card*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.phlex_options_card[].phlex_options_card_datasheet
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_options_card_datasheet: prismic.KeyTextField;
	
	/**
	 * phlex-options-card-text3 field in *chhopedCarbon → phlex-options-card*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.phlex_options_card[].phlex_options_card_text3
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_options_card_text3: prismic.KeyTextField;
}

/**
 * Item in *chhopedCarbon → Typical Properties*
 */
export interface ChhopedCarbonDocumentDataTypicalPropertiesItem {
	/**
	 * Title field in *chhopedCarbon → Typical Properties*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.typical_properties[].title
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	title: prismic.RichTextField;
	
	/**
	 * property_header1 field in *chhopedCarbon → Typical Properties*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.typical_properties[].proeprties
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	proeprties: prismic.KeyTextField;
	
	/**
	 * property_header2 field in *chhopedCarbon → Typical Properties*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.typical_properties[].property_header2
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	property_header2: prismic.KeyTextField;
}

/**
 * Item in *chhopedCarbon → standard_properties*
 */
export interface ChhopedCarbonDocumentDataStandardPropertiesItem {
	/**
	 * proeprties field in *chhopedCarbon → standard_properties*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.standard_properties[].proeprties
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	proeprties: prismic.KeyTextField;
	
	/**
	 * value1 field in *chhopedCarbon → standard_properties*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.standard_properties[].value
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	value: prismic.KeyTextField;
	
	/**
	 * value2 field in *chhopedCarbon → standard_properties*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.standard_properties[].value2
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	value2: prismic.KeyTextField;
}

/**
 * Item in *chhopedCarbon → Faq*
 */
export interface ChhopedCarbonDocumentDataFaqItem {
	/**
	 * question field in *chhopedCarbon → Faq*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.faq[].question
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	question: prismic.KeyTextField;
	
	/**
	 * answer field in *chhopedCarbon → Faq*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.faq[].answer
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	answer: prismic.KeyTextField;
}

/**
 * Content for chhopedCarbon documents
 */
interface ChhopedCarbonDocumentData {
	/**
	 * background image field in *chhopedCarbon*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.background_image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	background_image: prismic.ImageField<never>;
	
	/**
	 * SubTitle field in *chhopedCarbon*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.sub_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	sub_title: prismic.KeyTextField;
	
	/**
	 * descriprtion1 field in *chhopedCarbon*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.descriprtion1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	descriprtion1: prismic.KeyTextField;
	
	/**
	 * descriprtion2 field in *chhopedCarbon*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.descriprtion2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	descriprtion2: prismic.KeyTextField;
	
	/**
	 * descriprtion3 field in *chhopedCarbon*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.descriprtion3
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	descriprtion3: prismic.KeyTextField;
	
	/**
	 * main_title field in *chhopedCarbon*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.main_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	main_title: prismic.KeyTextField;
	
	/**
	 * phlex-options-subtitle field in *chhopedCarbon*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.phlex_options_subtitle
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_options_subtitle: prismic.KeyTextField;
	
	/**
	 * phlex-options-subtitle-sub field in *chhopedCarbon*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.phlex_options_subtitle_sub
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_options_subtitle_sub: prismic.KeyTextField;
	
	/**
	 * phlex-options-card field in *chhopedCarbon*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.phlex_options_card[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	phlex_options_card: prismic.GroupField<Simplify<ChhopedCarbonDocumentDataPhlexOptionsCardItem>>;
	
	/**
	 * phlex-process-title field in *chhopedCarbon*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.phlex_process_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_process_title: prismic.KeyTextField;
	
	/**
	 * phlex-process-desc1 field in *chhopedCarbon*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.phlex_process_desc1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_process_desc1: prismic.KeyTextField;
	
	/**
	 * phlex-process-desc2 field in *chhopedCarbon*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.phlex_process_desc2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_process_desc2: prismic.KeyTextField;
	
	/**
	 * phlex-process-desc3 field in *chhopedCarbon*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.phlex_process_desc3
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_process_desc3: prismic.KeyTextField;
	
	/**
	 * phlex-process-img field in *chhopedCarbon*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.phlex_process_img
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	phlex_process_img: prismic.ImageField<never>;
	
	/**
	 * phlex-flexibility-desc1 field in *chhopedCarbon*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.phlex_flexibility_desc1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_flexibility_desc1: prismic.KeyTextField;
	
	/**
	 * phlex-flexibility-desc2 field in *chhopedCarbon*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.phlex_flexibility_desc2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_flexibility_desc2: prismic.KeyTextField;
	
	/**
	 * phlex-flexibility-desc3 field in *chhopedCarbon*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.phlex_flexibility_desc3
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_flexibility_desc3: prismic.KeyTextField;
	
	/**
	 * phlex-flexibility-img field in *chhopedCarbon*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.phlex_flexibility_img
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	phlex_flexibility_img: prismic.ImageField<never>;
	
	/**
	 * Typical Properties field in *chhopedCarbon*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.typical_properties[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	typical_properties: prismic.GroupField<Simplify<ChhopedCarbonDocumentDataTypicalPropertiesItem>>;
	
	/**
	 * standard_properties field in *chhopedCarbon*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.standard_properties[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	standard_properties: prismic.GroupField<Simplify<ChhopedCarbonDocumentDataStandardPropertiesItem>>;
	
	/**
	 * Faq field in *chhopedCarbon*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.faq[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	faq: prismic.GroupField<Simplify<ChhopedCarbonDocumentDataFaqItem>>;
	
	/**
	 * Title field in *chhopedCarbon*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	title: prismic.KeyTextField;
	
	/**
	 * phlex-flexibility-title field in *chhopedCarbon*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.phlex_flexibility_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_flexibility_title: prismic.KeyTextField;
	
	/**
	 * Titlem field in *chhopedCarbon*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon.titlem
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	titlem: prismic.KeyTextField;
}

/**
 * chhopedCarbon document from Prismic
 *
 * - **API ID**: `chhoped_carbon`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/content-modeling
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ChhopedCarbonDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<ChhopedCarbonDocumentData>, "chhoped_carbon", Lang>;

/**
 * Item in *PhlexCarbon fctm → Typical Properties*
 */
export interface ChhopedCarbonFiberDocumentDataTypicalPropertiesItem {
	/**
	 * Title field in *PhlexCarbon fctm → Typical Properties*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.typical_properties[].title
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	title: prismic.RichTextField;
	
	/**
	 * product_header field in *PhlexCarbon fctm → Typical Properties*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.typical_properties[].product_header
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	product_header: prismic.KeyTextField;
}

/**
 * Item in *PhlexCarbon fctm → standard_properties*
 */
export interface ChhopedCarbonFiberDocumentDataStandardPropertiesItem {
	/**
	 * proeprties field in *PhlexCarbon fctm → standard_properties*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.standard_properties[].proeprties
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	proeprties: prismic.KeyTextField;
	
	/**
	 * value field in *PhlexCarbon fctm → standard_properties*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.standard_properties[].value
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	value: prismic.KeyTextField;
}

/**
 * Item in *PhlexCarbon fctm → carbon_fiber_properties*
 */
export interface ChhopedCarbonFiberDocumentDataCarbonFiberPropertiesItem {
	/**
	 * property_header field in *PhlexCarbon fctm → carbon_fiber_properties*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.carbon_fiber_properties[].property_header
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	property_header: prismic.RichTextField;
	
	/**
	 * high_strength_header field in *PhlexCarbon fctm → carbon_fiber_properties*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.carbon_fiber_properties[].high_strength_header
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	high_strength_header: prismic.KeyTextField;
	
	/**
	 * intermediate_header field in *PhlexCarbon fctm → carbon_fiber_properties*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.carbon_fiber_properties[].intermediate_header
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	intermediate_header: prismic.KeyTextField;
}

/**
 * Item in *PhlexCarbon fctm → fiber_section_rows*
 */
export interface ChhopedCarbonFiberDocumentDataFiberSectionRowsItem {
	/**
	 * proeprties field in *PhlexCarbon fctm → fiber_section_rows*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.fiber_section_rows[].proeprties
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	proeprties: prismic.KeyTextField;
	
	/**
	 * high_strength field in *PhlexCarbon fctm → fiber_section_rows*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.fiber_section_rows[].high_strength
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	high_strength: prismic.KeyTextField;
	
	/**
	 * intermediate field in *PhlexCarbon fctm → fiber_section_rows*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.fiber_section_rows[].intermediate
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	intermediate: prismic.KeyTextField;
}

/**
 * Item in *PhlexCarbon fctm → phlex-weights-section*
 */
export interface ChhopedCarbonFiberDocumentDataPhlexWeightsSectionItem {
	/**
	 * weight field in *PhlexCarbon fctm → phlex-weights-section*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.phlex_weights_section[].weight
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	weight: prismic.KeyTextField;
}

/**
 * Item in *PhlexCarbon fctm → Faq*
 */
export interface ChhopedCarbonFiberDocumentDataFaqItem {
	/**
	 * question field in *PhlexCarbon fctm → Faq*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.faq[].question
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	question: prismic.KeyTextField;
	
	/**
	 * answer field in *PhlexCarbon fctm → Faq*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.faq[].answer
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	answer: prismic.KeyTextField;
}

/**
 * Item in *PhlexCarbon fctm → phlex-options-card*
 */
export interface ChhopedCarbonFiberDocumentDataPhlexOptionsCardItem {
	/**
	 * phlex-options-card-img field in *PhlexCarbon fctm → phlex-options-card*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.phlex_options_card[].phlex_options_card_img
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	phlex_options_card_img: prismic.ImageField<never>;
	
	/**
	 * phlex-options-number field in *PhlexCarbon fctm → phlex-options-card*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.phlex_options_card[].phlex_options_number
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_options_number: prismic.KeyTextField;
	
	/**
	 * phlex-options-card-title field in *PhlexCarbon fctm → phlex-options-card*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.phlex_options_card[].phlex_options_card_title
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_options_card_title: prismic.KeyTextField;
	
	/**
	 * phlex-options-card-title-str field in *PhlexCarbon fctm → phlex-options-card*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.phlex_options_card[].phlex_options_card_title_str
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_options_card_title_str: prismic.KeyTextField;
	
	/**
	 * phlex-options-card-text1 field in *PhlexCarbon fctm → phlex-options-card*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.phlex_options_card[].phlex_options_card_text1
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_options_card_text1: prismic.KeyTextField;
	
	/**
	 * phlex-options-card-text2 field in *PhlexCarbon fctm → phlex-options-card*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.phlex_options_card[].phlex_options_card_text2
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_options_card_text2: prismic.KeyTextField;
	
	/**
	 * phlex-options-card-overlay field in *PhlexCarbon fctm → phlex-options-card*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.phlex_options_card[].phlex_options_card_overlay
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_options_card_overlay: prismic.KeyTextField;
}

/**
 * Content for PhlexCarbon fctm documents
 */
interface ChhopedCarbonFiberDocumentData {
	/**
	 * background image field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.background_image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	background_image: prismic.ImageField<never>;
	
	/**
	 * Title field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	title: prismic.KeyTextField;
	
	/**
	 * SubTitle field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.sub_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	sub_title: prismic.KeyTextField;
	
	/**
	 * descriprtion1 field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.descriprtion1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	descriprtion1: prismic.KeyTextField;
	
	/**
	 * discription2 field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.discription2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	discription2: prismic.KeyTextField;
	
	/**
	 * descriprtion3 field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.descriprtion3
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	descriprtion3: prismic.KeyTextField;
	
	/**
	 * main_title field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.main_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	main_title: prismic.KeyTextField;
	
	/**
	 * Typical Properties field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.typical_properties[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	typical_properties: prismic.GroupField<Simplify<ChhopedCarbonFiberDocumentDataTypicalPropertiesItem>>;
	
	/**
	 * standard_properties field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.standard_properties[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	standard_properties: prismic.GroupField<Simplify<ChhopedCarbonFiberDocumentDataStandardPropertiesItem>>;
	
	/**
	 * carbon_fiber_properties field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.carbon_fiber_properties[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	carbon_fiber_properties: prismic.GroupField<Simplify<ChhopedCarbonFiberDocumentDataCarbonFiberPropertiesItem>>;
	
	/**
	 * fiber_section_rows field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.fiber_section_rows[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	fiber_section_rows: prismic.GroupField<Simplify<ChhopedCarbonFiberDocumentDataFiberSectionRowsItem>>;
	
	/**
	 * phlex-weights-section field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.phlex_weights_section[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	phlex_weights_section: prismic.GroupField<Simplify<ChhopedCarbonFiberDocumentDataPhlexWeightsSectionItem>>;
	
	/**
	 * phlex-weights-footer-text field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.phlex_weights_footer_text
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_weights_footer_text: prismic.KeyTextField;
	
	/**
	 * phlex-cta-section field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.phlex_cta_section
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_cta_section: prismic.KeyTextField;
	
	/**
	 * phlex-cta-bg-img field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.phlex_cta_bg_img
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	phlex_cta_bg_img: prismic.ImageField<never>;
	
	/**
	 * phlex-cta-title field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.phlex_cta_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	phlex_cta_title: prismic.RichTextField;
	
	/**
	 * phlex-cta-desc1 field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.phlex_cta_desc1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_cta_desc1: prismic.KeyTextField;
	
	/**
	 * phlex-cta-desc2 field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.phlex_cta_desc2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_cta_desc2: prismic.KeyTextField;
	
	/**
	 * Faq field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.faq[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	faq: prismic.GroupField<Simplify<ChhopedCarbonFiberDocumentDataFaqItem>>;
	
	/**
	 * phlex-options-subtitle field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.phlex_options_subtitle
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_options_subtitle: prismic.KeyTextField;
	
	/**
	 * phlex-options-subtitle-sub field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.phlex_options_subtitle_sub
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_options_subtitle_sub: prismic.KeyTextField;
	
	/**
	 * phlex-flexibility-section field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.phlex_flexibility_section
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	phlex_flexibility_section: prismic.RichTextField;
	
	/**
	 * phlex-flexibility-title field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.phlex_flexibility_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_flexibility_title: prismic.KeyTextField;
	
	/**
	 * phlex-flexibility-img field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.phlex_flexibility_img
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	phlex_flexibility_img: prismic.ImageField<never>;
	
	/**
	 * phlex-flexibility-desc1 field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.phlex_flexibility_desc1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_flexibility_desc1: prismic.KeyTextField;
	
	/**
	 * phlex-flexibility-desc2 field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.phlex_flexibility_desc2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_flexibility_desc2: prismic.KeyTextField;
	
	/**
	 * phlex-flexibility-desc3 field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.phlex_flexibility_desc3
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_flexibility_desc3: prismic.KeyTextField;
	
	/**
	 * phlex-options-card field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: chhoped_carbon_fiber.phlex_options_card[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	phlex_options_card: prismic.GroupField<Simplify<ChhopedCarbonFiberDocumentDataPhlexOptionsCardItem>>;
}

/**
 * PhlexCarbon fctm document from Prismic
 *
 * - **API ID**: `chhoped_carbon_fiber`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/content-modeling
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ChhopedCarbonFiberDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<ChhopedCarbonFiberDocumentData>, "chhoped_carbon_fiber", Lang>;

/**
 * Content for Contact Submission documents
 */
interface ContactSubmissionDocumentData {
	/**
	 * first_name field in *Contact Submission*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contact_submission.first_name
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	first_name: prismic.KeyTextField;
	
	/**
	 * last_name field in *Contact Submission*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contact_submission.last_name
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	last_name: prismic.KeyTextField;
	
	/**
	 * email field in *Contact Submission*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contact_submission.email
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	email: prismic.KeyTextField;
	
	/**
	 * message field in *Contact Submission*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contact_submission.message
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	message: prismic.KeyTextField;
}

/**
 * Contact Submission document from Prismic
 *
 * - **API ID**: `contact_submission`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/content-modeling
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContactSubmissionDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<ContactSubmissionDocumentData>, "contact_submission", Lang>;

/**
 * Content for Contact us documents
 */
interface ContactUsDocumentData {
	/**
	 * background image field in *Contact us*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contact_us.background_image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	background_image: prismic.ImageField<never>;
	
	/**
	 * phlex-contact-title field in *Contact us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contact_us.phlex_contact_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_contact_title: prismic.KeyTextField;
	
	/**
	 * phlex-hero-desc field in *Contact us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contact_us.phlex_hero_desc
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_hero_desc: prismic.KeyTextField;
	
	/**
	 * email field in *Contact us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contact_us.email
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	email: prismic.KeyTextField;
	
	/**
	 * number field in *Contact us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contact_us.number
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	number: prismic.KeyTextField;
	
	/**
	 * available day field in *Contact us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contact_us.available_day
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	available_day: prismic.KeyTextField;
	
	/**
	 * available time field in *Contact us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contact_us.available_time
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	available_time: prismic.KeyTextField;
	
	/**
	 * map_address field in *Contact us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contact_us.map_address
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	map_address: prismic.KeyTextField;
	
	/**
	 * map_latitude field in *Contact us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contact_us.map_latitude
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	map_latitude: prismic.KeyTextField;
	
	/**
	 * map_longitude field in *Contact us*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contact_us.map_longitude
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	map_longitude: prismic.KeyTextField;
}

/**
 * Contact us document from Prismic
 *
 * - **API ID**: `contact_us`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/content-modeling
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContactUsDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<ContactUsDocumentData>, "contact_us", Lang>;

/**
 * Item in *Fiber Sizing → products*
 */
export interface FiberSizingDocumentDataProductsItem {
	/**
	 * product_name field in *Fiber Sizing → products*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: fiber_sizing.products[].product_name
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	product_name: prismic.KeyTextField;
	
	/**
	 * chemistry field in *Fiber Sizing → products*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: fiber_sizing.products[].chemistry
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	chemistry: prismic.KeyTextField;
	
	/**
	 * properties field in *Fiber Sizing → products*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: fiber_sizing.products[].properties
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	properties: prismic.KeyTextField;
}

/**
 * Item in *Fiber Sizing → faqs*
 */
export interface FiberSizingDocumentDataFaqsItem {
	/**
	 * question field in *Fiber Sizing → faqs*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: fiber_sizing.faqs[].question
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	question: prismic.KeyTextField;
	
	/**
	 * answer field in *Fiber Sizing → faqs*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: fiber_sizing.faqs[].answer
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	answer: prismic.KeyTextField;
}

/**
 * Content for Fiber Sizing documents
 */
interface FiberSizingDocumentData {
	/**
	 * Hero Title field in *Fiber Sizing*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: fiber_sizing.hero_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	hero_title: prismic.KeyTextField;
	
	/**
	 * Hero Subtitle field in *Fiber Sizing*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: fiber_sizing.hero_subtitle
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	hero_subtitle: prismic.KeyTextField;
	
	/**
	 * Hero Description 1 field in *Fiber Sizing*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: fiber_sizing.hero_description_1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	hero_description_1: prismic.KeyTextField;
	
	/**
	 * Hero Description 2 field in *Fiber Sizing*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: fiber_sizing.hero_description_2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	hero_description_2: prismic.KeyTextField;
	
	/**
	 * hero_description_3 field in *Fiber Sizing*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: fiber_sizing.hero_description_3
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	hero_description_3: prismic.KeyTextField;
	
	/**
	 * Hero Button 1 field in *Fiber Sizing*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: fiber_sizing.hero_button_1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	hero_button_1: prismic.KeyTextField;
	
	/**
	 * Hero Button 2 field in *Fiber Sizing*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: fiber_sizing.hero_button_2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	hero_button_2: prismic.KeyTextField;
	
	/**
	 * About Title field in *Fiber Sizing*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: fiber_sizing.about_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	about_title: prismic.KeyTextField;
	
	/**
	 * About Description field in *Fiber Sizing*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: fiber_sizing.about_description
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	about_description: prismic.KeyTextField;
	
	/**
	 * About Description 1 field in *Fiber Sizing*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: fiber_sizing.about_description_1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	about_description_1: prismic.KeyTextField;
	
	/**
	 * About Description 2 field in *Fiber Sizing*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: fiber_sizing.about_description_2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	about_description_2: prismic.KeyTextField;
	
	/**
	 * products field in *Fiber Sizing*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: fiber_sizing.products[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	products: prismic.GroupField<Simplify<FiberSizingDocumentDataProductsItem>>;
	
	/**
	 * find_fit_title field in *Fiber Sizing*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: fiber_sizing.find_fit_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	find_fit_title: prismic.KeyTextField;
	
	/**
	 * find_fit_description field in *Fiber Sizing*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: fiber_sizing.find_fit_description
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	find_fit_description: prismic.KeyTextField;
	
	/**
	 * find_fit_description_1 field in *Fiber Sizing*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: fiber_sizing.find_fit_description_1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	find_fit_description_1: prismic.KeyTextField;
	
	/**
	 * find_fit_description_2 field in *Fiber Sizing*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: fiber_sizing.find_fit_description_2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	find_fit_description_2: prismic.KeyTextField;
	
	/**
	 * find_fit_button field in *Fiber Sizing*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: fiber_sizing.find_fit_button
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	find_fit_button: prismic.KeyTextField;
	
	/**
	 * cta_title field in *Fiber Sizing*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: fiber_sizing.cta_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	cta_title: prismic.KeyTextField;
	
	/**
	 * cta_description field in *Fiber Sizing*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: fiber_sizing.cta_description
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	cta_description: prismic.KeyTextField;
	
	/**
	 * cta_description 1 field in *Fiber Sizing*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: fiber_sizing.cta_description_1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	cta_description_1: prismic.KeyTextField;
	
	/**
	 * cta_button field in *Fiber Sizing*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: fiber_sizing.cta_button
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	cta_button: prismic.KeyTextField;
	
	/**
	 * cta_button 1 field in *Fiber Sizing*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: fiber_sizing.cta_button_1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	cta_button_1: prismic.KeyTextField;
	
	/**
	 * faqs field in *Fiber Sizing*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: fiber_sizing.faqs[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	faqs: prismic.GroupField<Simplify<FiberSizingDocumentDataFaqsItem>>;
	
	/**
	 * contact_title field in *Fiber Sizing*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: fiber_sizing.contact_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	contact_title: prismic.KeyTextField;
	
	/**
	 * contact_description field in *Fiber Sizing*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: fiber_sizing.contact_description
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	contact_description: prismic.KeyTextField;
	
	/**
	 * contact_button field in *Fiber Sizing*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: fiber_sizing.contact_button
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	contact_button: prismic.KeyTextField;
}

/**
 * Fiber Sizing document from Prismic
 *
 * - **API ID**: `fiber_sizing`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/content-modeling
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FiberSizingDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<FiberSizingDocumentData>, "fiber_sizing", Lang>;

type HomepageDocumentDataSlicesSlice = HeroSlice | ResourceLinksSlice | CardGridSlice

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
	/**
	 * Slice Zone field in *Homepage*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/slices
	 */
	slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice>;/**
	 * Meta Title field in *Homepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: homepage.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	meta_title: prismic.KeyTextField;
	
	/**
	 * Meta Description field in *Homepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: homepage.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	meta_description: prismic.KeyTextField;/**
	 * Copyright Text field in *Homepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.footer_copyright_text
	 * - **Tab**: Footer
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	footer_copyright_text: prismic.KeyTextField;
	
	/**
	 * Cookies Link field in *Homepage*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.footer_cookies_link
	 * - **Tab**: Footer
	 * - **Documentation**: https://prismic.io/docs/fields/link
	 */
	footer_cookies_link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
	
	/**
	 * Social Links field in *Homepage*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.footer_social_links
	 * - **Tab**: Footer
	 * - **Documentation**: https://prismic.io/docs/fields/link
	 */
	footer_social_links: prismic.Repeatable<prismic.LinkField<string, string, unknown, prismic.FieldState, "X" | "YouTube" | "GitHub" | "LinkedIn">>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/content-modeling
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<HomepageDocumentData>, "homepage", Lang>;

type MyPageDocumentDataSlicesSlice = HeroSlice

/**
 * Content for My Page documents
 */
interface MyPageDocumentData {
	/**
	 * Title field in *My Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: my_page.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	title: prismic.KeyTextField;
	
	/**
	 * Description field in *My Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: my_page.description
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	description: prismic.KeyTextField;
	
	/**
	 * `slices` field in *My Page*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: my_page.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/slices
	 */
	slices: prismic.SliceZone<MyPageDocumentDataSlicesSlice>;
}

/**
 * My Page document from Prismic
 *
 * - **API ID**: `my_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/content-modeling
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MyPageDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<MyPageDocumentData>, "my_page", Lang>;

/**
 * Item in *PhlexCarbon CFM → Typical Properties*
 */
export interface PhlexCarbonCfmDocumentDataTypicalPropertiesItem {
	/**
	 * Property field in *PhlexCarbon CFM → Typical Properties*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.typical_properties[].property
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	property: prismic.KeyTextField;
	
	/**
	 * PhlexCarbon CFM field in *PhlexCarbon CFM → Typical Properties*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.typical_properties[].phlex_carbon_cfm
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_carbon_cfm: prismic.KeyTextField;
}

/**
 * Item in *PhlexCarbon CFM → Carbon Fiber Properties*
 */
export interface PhlexCarbonCfmDocumentDataCarbonFiberPropertiesItem {
	/**
	 * Property field in *PhlexCarbon CFM → Carbon Fiber Properties*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.carbon_fiber_properties[].property
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	property: prismic.KeyTextField;
	
	/**
	 * High Strength field in *PhlexCarbon CFM → Carbon Fiber Properties*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.carbon_fiber_properties[].high_strength
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	high_strength: prismic.KeyTextField;
	
	/**
	 * Intermediate field in *PhlexCarbon CFM → Carbon Fiber Properties*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.carbon_fiber_properties[].intermediate
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	intermediate: prismic.KeyTextField;
}

/**
 * Item in *PhlexCarbon CFM → areal_weights*
 */
export interface PhlexCarbonCfmDocumentDataArealWeightsItem {
	/**
	 * weight field in *PhlexCarbon CFM → areal_weights*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.areal_weights[].weight
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	weight: prismic.KeyTextField;
}

/**
 * Item in *PhlexCarbon CFM → faqs*
 */
export interface PhlexCarbonCfmDocumentDataFaqsItem {
	/**
	 * question field in *PhlexCarbon CFM → faqs*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.faqs[].question
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	question: prismic.KeyTextField;
	
	/**
	 * answer field in *PhlexCarbon CFM → faqs*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.faqs[].answer
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	answer: prismic.KeyTextField;
}

/**
 * Content for PhlexCarbon CFM documents
 */
interface PhlexCarbonCfmDocumentData {
	/**
	 * Hero Title field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.hero_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	hero_title: prismic.KeyTextField;
	
	/**
	 * Hero Subtitle field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.hero_subtitle
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	hero_subtitle: prismic.KeyTextField;
	
	/**
	 * Hero Description 1 field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.hero_description_1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	hero_description_1: prismic.KeyTextField;
	
	/**
	 * Hero Description 2 field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.hero_description_2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	hero_description_2: prismic.KeyTextField;
	
	/**
	 * Hero Description 3 field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.hero_description_3
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	hero_description_3: prismic.KeyTextField;
	
	/**
	 * Hero Button 1 field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.hero_button_1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	hero_button_1: prismic.KeyTextField;
	
	/**
	 * Hero Button 2 field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.hero_button_2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	hero_button_2: prismic.KeyTextField;
	
	/**
	 * Options Title field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.options_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	options_title: prismic.KeyTextField;
	
	/**
	 * Options Description field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.options_description
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	options_description: prismic.KeyTextField;
	
	/**
	 * Options Description 2 field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.options_description_2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	options_description_2: prismic.KeyTextField;
	
	/**
	 * Option 1 Image field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.option_1_image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	option_1_image: prismic.ImageField<never>;
	
	/**
	 * Option 1 Title field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.option_1_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	option_1_title: prismic.KeyTextField;
	
	/**
	 * Option 1 Text 1 field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.option_1_text_1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	option_1_text_1: prismic.KeyTextField;
	
	/**
	 * Option 1 Text 2 field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.option_1_text_2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	option_1_text_2: prismic.KeyTextField;
	
	/**
	 * Option 2 Image field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.option_2_image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	option_2_image: prismic.ImageField<never>;
	
	/**
	 * Option 2 Title field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.option_2_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	option_2_title: prismic.KeyTextField;
	
	/**
	 * Option 2 Text 1 field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.option_2_text_1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	option_2_text_1: prismic.KeyTextField;
	
	/**
	 * Option 2 Text 2 field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.option_2_text_2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	option_2_text_2: prismic.KeyTextField;
	
	/**
	 * Process Title field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.process_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	process_title: prismic.KeyTextField;
	
	/**
	 * Process Description field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.process_description
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	process_description: prismic.KeyTextField;
	
	/**
	 * Process Item 1 field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.process_item_1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	process_item_1: prismic.KeyTextField;
	
	/**
	 * Process Item 2 field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.process_item_2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	process_item_2: prismic.KeyTextField;
	
	/**
	 * Process Item 3 field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.process_item_3
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	process_item_3: prismic.KeyTextField;
	
	/**
	 * Process Item 4 field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.process_item_4
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	process_item_4: prismic.KeyTextField;
	
	/**
	 * Process Bottom Description field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.process_bottom_description
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	process_bottom_description: prismic.KeyTextField;
	
	/**
	 * Process Image field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.process_image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	process_image: prismic.ImageField<never>;
	
	/**
	 * Flexibility Title field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.flexibility_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	flexibility_title: prismic.KeyTextField;
	
	/**
	 * Flexibility Description 1 field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.flexibility_description_1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	flexibility_description_1: prismic.KeyTextField;
	
	/**
	 * Flexibility Description 2 field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.flexibility_description_2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	flexibility_description_2: prismic.KeyTextField;
	
	/**
	 * Flexibility Description 3 field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.flexibility_description_3
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	flexibility_description_3: prismic.KeyTextField;
	
	/**
	 * Flexibility Image field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.flexibility_image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	flexibility_image: prismic.ImageField<never>;
	
	/**
	 * Typical Properties field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.typical_properties[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	typical_properties: prismic.GroupField<Simplify<PhlexCarbonCfmDocumentDataTypicalPropertiesItem>>;
	
	/**
	 * Carbon Fiber Properties field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.carbon_fiber_properties[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	carbon_fiber_properties: prismic.GroupField<Simplify<PhlexCarbonCfmDocumentDataCarbonFiberPropertiesItem>>;
	
	/**
	 * areal_weights field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.areal_weights[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	areal_weights: prismic.GroupField<Simplify<PhlexCarbonCfmDocumentDataArealWeightsItem>>;
	
	/**
	 * CTA Title field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.cta_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	cta_title: prismic.KeyTextField;
	
	/**
	 * CTA Description 1 field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.cta_description_1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	cta_description_1: prismic.KeyTextField;
	
	/**
	 * CTA Description 2 field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.cta_description_2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	cta_description_2: prismic.KeyTextField;
	
	/**
	 * CTA button 1 field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.cta_button_1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	cta_button_1: prismic.KeyTextField;
	
	/**
	 * CTA button 2 field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.cta_button_2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	cta_button_2: prismic.KeyTextField;
	
	/**
	 * faqs field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.faqs[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	faqs: prismic.GroupField<Simplify<PhlexCarbonCfmDocumentDataFaqsItem>>;
	
	/**
	 * contact_title field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.contact_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	contact_title: prismic.KeyTextField;
	
	/**
	 * contact_description field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.contact_description
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	contact_description: prismic.KeyTextField;
	
	/**
	 * contact_button field in *PhlexCarbon CFM*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_cfm.contact_button
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	contact_button: prismic.KeyTextField;
}

/**
 * PhlexCarbon CFM document from Prismic
 *
 * - **API ID**: `phlex_carbon_cfm`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/content-modeling
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PhlexCarbonCfmDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<PhlexCarbonCfmDocumentData>, "phlex_carbon_cfm", Lang>;

/**
 * Item in *PhlexCarbon fctm → Typical Properties*
 */
export interface PhlexCarbonFctmDocumentDataTypicalPropertiesItem {
	/**
	 * Title field in *PhlexCarbon fctm → Typical Properties*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.typical_properties[].title
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	title: prismic.RichTextField;
	
	/**
	 * product_header field in *PhlexCarbon fctm → Typical Properties*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.typical_properties[].product_header
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	product_header: prismic.KeyTextField;
}

/**
 * Item in *PhlexCarbon fctm → standard_properties*
 */
export interface PhlexCarbonFctmDocumentDataStandardPropertiesItem {
	/**
	 * proeprties field in *PhlexCarbon fctm → standard_properties*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.standard_properties[].proeprties
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	proeprties: prismic.KeyTextField;
	
	/**
	 * value field in *PhlexCarbon fctm → standard_properties*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.standard_properties[].value
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	value: prismic.KeyTextField;
}

/**
 * Item in *PhlexCarbon fctm → carbon_fiber_properties*
 */
export interface PhlexCarbonFctmDocumentDataCarbonFiberPropertiesItem {
	/**
	 * property_header field in *PhlexCarbon fctm → carbon_fiber_properties*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.carbon_fiber_properties[].property_header
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	property_header: prismic.RichTextField;
	
	/**
	 * high_strength_header field in *PhlexCarbon fctm → carbon_fiber_properties*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.carbon_fiber_properties[].high_strength_header
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	high_strength_header: prismic.KeyTextField;
	
	/**
	 * intermediate_header field in *PhlexCarbon fctm → carbon_fiber_properties*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.carbon_fiber_properties[].intermediate_header
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	intermediate_header: prismic.KeyTextField;
}

/**
 * Item in *PhlexCarbon fctm → fiber_section_rows*
 */
export interface PhlexCarbonFctmDocumentDataFiberSectionRowsItem {
	/**
	 * proeprties field in *PhlexCarbon fctm → fiber_section_rows*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.fiber_section_rows[].proeprties
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	proeprties: prismic.KeyTextField;
	
	/**
	 * high_strength field in *PhlexCarbon fctm → fiber_section_rows*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.fiber_section_rows[].high_strength
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	high_strength: prismic.KeyTextField;
	
	/**
	 * intermediate field in *PhlexCarbon fctm → fiber_section_rows*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.fiber_section_rows[].intermediate
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	intermediate: prismic.KeyTextField;
}

/**
 * Item in *PhlexCarbon fctm → phlex-weights-section*
 */
export interface PhlexCarbonFctmDocumentDataPhlexWeightsSectionItem {
	/**
	 * weight field in *PhlexCarbon fctm → phlex-weights-section*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.phlex_weights_section[].weight
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	weight: prismic.KeyTextField;
}

/**
 * Item in *PhlexCarbon fctm → Faq*
 */
export interface PhlexCarbonFctmDocumentDataFaqItem {
	/**
	 * question field in *PhlexCarbon fctm → Faq*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.faq[].question
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	question: prismic.KeyTextField;
	
	/**
	 * answer field in *PhlexCarbon fctm → Faq*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.faq[].answer
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	answer: prismic.KeyTextField;
}

/**
 * Item in *PhlexCarbon fctm → phlex-options-card*
 */
export interface PhlexCarbonFctmDocumentDataPhlexOptionsCardItem {
	/**
	 * phlex-options-card-img field in *PhlexCarbon fctm → phlex-options-card*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.phlex_options_card[].phlex_options_card_img
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	phlex_options_card_img: prismic.ImageField<never>;
	
	/**
	 * phlex-options-number field in *PhlexCarbon fctm → phlex-options-card*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.phlex_options_card[].phlex_options_number
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_options_number: prismic.KeyTextField;
	
	/**
	 * phlex-options-card-title field in *PhlexCarbon fctm → phlex-options-card*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.phlex_options_card[].phlex_options_card_title
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_options_card_title: prismic.KeyTextField;
	
	/**
	 * phlex-options-card-title-str field in *PhlexCarbon fctm → phlex-options-card*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.phlex_options_card[].phlex_options_card_title_str
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_options_card_title_str: prismic.KeyTextField;
	
	/**
	 * phlex-options-card-text1 field in *PhlexCarbon fctm → phlex-options-card*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.phlex_options_card[].phlex_options_card_text1
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_options_card_text1: prismic.KeyTextField;
	
	/**
	 * phlex-options-card-text2 field in *PhlexCarbon fctm → phlex-options-card*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.phlex_options_card[].phlex_options_card_text2
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_options_card_text2: prismic.KeyTextField;
	
	/**
	 * phlex-options-card-overlay field in *PhlexCarbon fctm → phlex-options-card*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.phlex_options_card[].phlex_options_card_overlay
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_options_card_overlay: prismic.KeyTextField;
}

/**
 * Content for PhlexCarbon fctm documents
 */
interface PhlexCarbonFctmDocumentData {
	/**
	 * background image field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.background_image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	background_image: prismic.ImageField<never>;
	
	/**
	 * Title field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	title: prismic.KeyTextField;
	
	/**
	 * SubTitle field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.sub_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	sub_title: prismic.KeyTextField;
	
	/**
	 * descriprtion1 field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.descriprtion1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	descriprtion1: prismic.KeyTextField;
	
	/**
	 * discription2 field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.discription2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	discription2: prismic.KeyTextField;
	
	/**
	 * descriprtion3 field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.descriprtion3
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	descriprtion3: prismic.KeyTextField;
	
	/**
	 * main_title field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.main_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	main_title: prismic.KeyTextField;
	
	/**
	 * Typical Properties field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.typical_properties[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	typical_properties: prismic.GroupField<Simplify<PhlexCarbonFctmDocumentDataTypicalPropertiesItem>>;
	
	/**
	 * standard_properties field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.standard_properties[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	standard_properties: prismic.GroupField<Simplify<PhlexCarbonFctmDocumentDataStandardPropertiesItem>>;
	
	/**
	 * carbon_fiber_properties field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.carbon_fiber_properties[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	carbon_fiber_properties: prismic.GroupField<Simplify<PhlexCarbonFctmDocumentDataCarbonFiberPropertiesItem>>;
	
	/**
	 * fiber_section_rows field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.fiber_section_rows[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	fiber_section_rows: prismic.GroupField<Simplify<PhlexCarbonFctmDocumentDataFiberSectionRowsItem>>;
	
	/**
	 * phlex-weights-section field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.phlex_weights_section[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	phlex_weights_section: prismic.GroupField<Simplify<PhlexCarbonFctmDocumentDataPhlexWeightsSectionItem>>;
	
	/**
	 * phlex-weights-footer-text field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.phlex_weights_footer_text
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_weights_footer_text: prismic.KeyTextField;
	
	/**
	 * phlex-cta-section field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.phlex_cta_section
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_cta_section: prismic.KeyTextField;
	
	/**
	 * phlex-cta-bg-img field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.phlex_cta_bg_img
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	phlex_cta_bg_img: prismic.ImageField<never>;
	
	/**
	 * phlex-cta-title field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.phlex_cta_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	phlex_cta_title: prismic.RichTextField;
	
	/**
	 * phlex-cta-desc1 field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.phlex_cta_desc1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_cta_desc1: prismic.KeyTextField;
	
	/**
	 * phlex-cta-desc2 field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.phlex_cta_desc2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_cta_desc2: prismic.KeyTextField;
	
	/**
	 * Faq field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.faq[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	faq: prismic.GroupField<Simplify<PhlexCarbonFctmDocumentDataFaqItem>>;
	
	/**
	 * phlex-options-subtitle field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.phlex_options_subtitle
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_options_subtitle: prismic.KeyTextField;
	
	/**
	 * phlex-options-subtitle-sub field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.phlex_options_subtitle_sub
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_options_subtitle_sub: prismic.KeyTextField;
	
	/**
	 * phlex-flexibility-section field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.phlex_flexibility_section
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	phlex_flexibility_section: prismic.RichTextField;
	
	/**
	 * phlex-flexibility-title field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.phlex_flexibility_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_flexibility_title: prismic.KeyTextField;
	
	/**
	 * phlex-flexibility-img field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.phlex_flexibility_img
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	phlex_flexibility_img: prismic.ImageField<never>;
	
	/**
	 * phlex-flexibility-desc1 field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.phlex_flexibility_desc1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_flexibility_desc1: prismic.KeyTextField;
	
	/**
	 * phlex-flexibility-desc2 field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.phlex_flexibility_desc2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_flexibility_desc2: prismic.KeyTextField;
	
	/**
	 * phlex-flexibility-desc3 field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.phlex_flexibility_desc3
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_flexibility_desc3: prismic.KeyTextField;
	
	/**
	 * phlex-options-card field in *PhlexCarbon fctm*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlex_carbon_fctm.phlex_options_card[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	phlex_options_card: prismic.GroupField<Simplify<PhlexCarbonFctmDocumentDataPhlexOptionsCardItem>>;
}

/**
 * PhlexCarbon fctm document from Prismic
 *
 * - **API ID**: `phlex_carbon_fctm`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/content-modeling
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PhlexCarbonFctmDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<PhlexCarbonFctmDocumentData>, "phlex_carbon_fctm", Lang>;

/**
 * Item in *Phlexhomepage → Product card*
 */
export interface PhlexhomepageDocumentDataProductCardItem {
	/**
	 * product title field in *Phlexhomepage → Product card*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.product_card[].product_title
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	product_title: prismic.KeyTextField;
	
	/**
	 * product heading field in *Phlexhomepage → Product card*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.product_card[].product_heading
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	product_heading: prismic.KeyTextField;
	
	/**
	 * product desc 1 field in *Phlexhomepage → Product card*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.product_card[].product_desc_1
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	product_desc_1: prismic.KeyTextField;
	
	/**
	 * product desc 2 field in *Phlexhomepage → Product card*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.product_card[].product_desc_2
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	product_desc_2: prismic.KeyTextField;
	
	/**
	 * product image field in *Phlexhomepage → Product card*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.product_card[].product_image
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	product_image: prismic.ImageField<never>;
	
	/**
	 * product link field in *Phlexhomepage → Product card*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.product_card[].product_link
	 * - **Documentation**: https://prismic.io/docs/fields/link
	 */
	product_link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Item in *Phlexhomepage → Demand group*
 */
export interface PhlexhomepageDocumentDataDemandGroupItem {
	/**
	 * dhead field in *Phlexhomepage → Demand group*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.demand_group[].dhead
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	dhead: prismic.KeyTextField;
	
	/**
	 * ddesc field in *Phlexhomepage → Demand group*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.demand_group[].ddesc
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	ddesc: prismic.KeyTextField;
	
	/**
	 * dimage field in *Phlexhomepage → Demand group*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.demand_group[].dimage
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	dimage: prismic.ImageField<never>;
}

/**
 * Item in *Phlexhomepage → Why Card*
 */
export interface PhlexhomepageDocumentDataWhyCardItem {
	/**
	 * why image field in *Phlexhomepage → Why Card*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.why_card[].why_image
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	why_image: prismic.ImageField<never>;
	
	/**
	 * why title field in *Phlexhomepage → Why Card*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.why_card[].why_title
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	why_title: prismic.KeyTextField;
	
	/**
	 * why heading field in *Phlexhomepage → Why Card*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.why_card[].why_heading
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	why_heading: prismic.KeyTextField;
	
	/**
	 * why description field in *Phlexhomepage → Why Card*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.why_card[].why_description
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	why_description: prismic.KeyTextField;
}

/**
 * Content for Phlexhomepage documents
 */
interface PhlexhomepageDocumentData {
	/**
	 * Hero Title field in *Phlexhomepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.hero_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	hero_title: prismic.KeyTextField;
	
	/**
	 * Hero Description 1 field in *Phlexhomepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.hero_description_1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	hero_description_1: prismic.KeyTextField;
	
	/**
	 * Hero Description 2 field in *Phlexhomepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.hero_description_2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	hero_description_2: prismic.KeyTextField;
	
	/**
	 * Manf_blue_title field in *Phlexhomepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.manf_blue_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	manf_blue_title: prismic.KeyTextField;
	
	/**
	 * Manf_black_title field in *Phlexhomepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.manf_black_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	manf_black_title: prismic.KeyTextField;
	
	/**
	 * manf_descp_1 field in *Phlexhomepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.manf_descp_1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	manf_descp_1: prismic.KeyTextField;
	
	/**
	 * manf_descp_2_blue field in *Phlexhomepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.manf_descp_2_blue
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	manf_descp_2_blue: prismic.KeyTextField;
	
	/**
	 * manf_descp_2 field in *Phlexhomepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.manf_descp_2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	manf_descp_2: prismic.KeyTextField;
	
	/**
	 * lake title field in *Phlexhomepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.lake_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	lake_title: prismic.KeyTextField;
	
	/**
	 * lake desc 1 field in *Phlexhomepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.lake_desc_1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	lake_desc_1: prismic.KeyTextField;
	
	/**
	 * lake desc 2 field in *Phlexhomepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.lake_desc_2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	lake_desc_2: prismic.KeyTextField;
	
	/**
	 * lake image field in *Phlexhomepage*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.lake_image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	lake_image: prismic.ImageField<never>;
	
	/**
	 * Product card field in *Phlexhomepage*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.product_card[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	product_card: prismic.GroupField<Simplify<PhlexhomepageDocumentDataProductCardItem>>;
	
	/**
	 * Demand head black field in *Phlexhomepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.demand_head_black
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	demand_head_black: prismic.KeyTextField;
	
	/**
	 * Demand head blue field in *Phlexhomepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.demand_head_blue
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	demand_head_blue: prismic.KeyTextField;
	
	/**
	 * Demand desc blue field in *Phlexhomepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.demand_desc_blue
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	demand_desc_blue: prismic.KeyTextField;
	
	/**
	 * demand desc1 field in *Phlexhomepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.demand_desc1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	demand_desc1: prismic.KeyTextField;
	
	/**
	 * demand desc2 field in *Phlexhomepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.demand_desc2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	demand_desc2: prismic.KeyTextField;
	
	/**
	 * Demand group field in *Phlexhomepage*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.demand_group[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	demand_group: prismic.GroupField<Simplify<PhlexhomepageDocumentDataDemandGroupItem>>;
	
	/**
	 * Flexible head blue field in *Phlexhomepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.flexible_head_blue
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	flexible_head_blue: prismic.KeyTextField;
	
	/**
	 * Flexible head field in *Phlexhomepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.flexible_head
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	flexible_head: prismic.KeyTextField;
	
	/**
	 * Flexible desc1 field in *Phlexhomepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.flexible_desc1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	flexible_desc1: prismic.KeyTextField;
	
	/**
	 * Flexible desc blue field in *Phlexhomepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.flexible_desc_blue
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	flexible_desc_blue: prismic.KeyTextField;
	
	/**
	 * Flexible desc 2 field in *Phlexhomepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.flexible_desc_2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	flexible_desc_2: prismic.KeyTextField;
	
	/**
	 * Flexible Image field in *Phlexhomepage*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.flexible_image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	flexible_image: prismic.ImageField<never>;
	
	/**
	 * Why title field in *Phlexhomepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.why_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	why_title: prismic.KeyTextField;
	
	/**
	 * Why description field in *Phlexhomepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.why_description
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	why_description: prismic.KeyTextField;
	
	/**
	 * Why Card field in *Phlexhomepage*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.why_card[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	why_card: prismic.GroupField<Simplify<PhlexhomepageDocumentDataWhyCardItem>>;
	
	/**
	 * cta heading field in *Phlexhomepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.cta_heading
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	cta_heading: prismic.KeyTextField;
	
	/**
	 * cta desc1 field in *Phlexhomepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.cta_desc1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	cta_desc1: prismic.KeyTextField;
	
	/**
	 * cta desc2 field in *Phlexhomepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: phlexhomepage.cta_desc2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	cta_desc2: prismic.KeyTextField;
}

/**
 * Phlexhomepage document from Prismic
 *
 * - **API ID**: `phlexhomepage`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/content-modeling
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PhlexhomepageDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<PhlexhomepageDocumentData>, "phlexhomepage", Lang>;

/**
 * Item in *SPCF 12K Tow → Typical Properties*
 */
export interface Spcf12KTowDocumentDataTypicalPropertiesItem {
	/**
	 * properties field in *SPCF 12K Tow → Typical Properties*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.typical_properties[].properties
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	properties: prismic.KeyTextField;
	
	/**
	 * Phlex Carbon SPCF field in *SPCF 12K Tow → Typical Properties*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.typical_properties[].phlex_carbon_spcf
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	phlex_carbon_spcf: prismic.KeyTextField;
}

/**
 * Item in *SPCF 12K Tow → Available options*
 */
export interface Spcf12KTowDocumentDataAvailableOptionsItem {
	/**
	 * option1 field in *SPCF 12K Tow → Available options*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.available_options[].option1
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	option1: prismic.KeyTextField;
	
	/**
	 * option2 field in *SPCF 12K Tow → Available options*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.available_options[].option2
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	option2: prismic.KeyTextField;
}

/**
 * Item in *SPCF 12K Tow → faqs*
 */
export interface Spcf12KTowDocumentDataFaqsItem {
	/**
	 * question field in *SPCF 12K Tow → faqs*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.faqs[].question
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	question: prismic.KeyTextField;
	
	/**
	 * answer field in *SPCF 12K Tow → faqs*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.faqs[].answer
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	answer: prismic.KeyTextField;
}

/**
 * Content for SPCF 12K Tow documents
 */
interface Spcf12KTowDocumentData {
	/**
	 * Hero Title field in *SPCF 12K Tow*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.hero_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	hero_title: prismic.KeyTextField;
	
	/**
	 * Hero Subtitle field in *SPCF 12K Tow*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.hero_subtitle
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	hero_subtitle: prismic.KeyTextField;
	
	/**
	 * Hero Description 1 field in *SPCF 12K Tow*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.hero_description_1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	hero_description_1: prismic.KeyTextField;
	
	/**
	 * Hero Description 2 field in *SPCF 12K Tow*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.hero_description_2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	hero_description_2: prismic.KeyTextField;
	
	/**
	 * Hero Description 3 field in *SPCF 12K Tow*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.hero_description_3
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	hero_description_3: prismic.KeyTextField;
	
	/**
	 * Hero Button 1 field in *SPCF 12K Tow*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.hero_button_1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	hero_button_1: prismic.KeyTextField;
	
	/**
	 * Hero Button 2 field in *SPCF 12K Tow*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.hero_button_2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	hero_button_2: prismic.KeyTextField;
	
	/**
	 * About Title field in *SPCF 12K Tow*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.about_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	about_title: prismic.KeyTextField;
	
	/**
	 * About Description field in *SPCF 12K Tow*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.about_description
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	about_description: prismic.KeyTextField;
	
	/**
	 * Option 1 Title field in *SPCF 12K Tow*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.option_1_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	option_1_title: prismic.KeyTextField;
	
	/**
	 * Option 1 Text 1 field in *SPCF 12K Tow*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.option_1_text_1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	option_1_text_1: prismic.KeyTextField;
	
	/**
	 * Option 1 Text 2 field in *SPCF 12K Tow*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.option_1_text_2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	option_1_text_2: prismic.KeyTextField;
	
	/**
	 * Option 1 Text 3 field in *SPCF 12K Tow*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.option_1_text_3
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	option_1_text_3: prismic.KeyTextField;
	
	/**
	 * Option 2 Title field in *SPCF 12K Tow*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.option_2_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	option_2_title: prismic.KeyTextField;
	
	/**
	 * Option 2 Text 1 field in *SPCF 12K Tow*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.option_2_text_1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	option_2_text_1: prismic.KeyTextField;
	
	/**
	 * Option 2 Text 2 field in *SPCF 12K Tow*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.option_2_text_2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	option_2_text_2: prismic.KeyTextField;
	
	/**
	 * Option 2 Text 3 field in *SPCF 12K Tow*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.option_2_text_3
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	option_2_text_3: prismic.KeyTextField;
	
	/**
	 * winding title field in *SPCF 12K Tow*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.winding_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	winding_title: prismic.KeyTextField;
	
	/**
	 * winding subtitle field in *SPCF 12K Tow*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.winding_subtitle
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	winding_subtitle: prismic.KeyTextField;
	
	/**
	 * winding des1 field in *SPCF 12K Tow*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.winding_des1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	winding_des1: prismic.KeyTextField;
	
	/**
	 * winding des2 field in *SPCF 12K Tow*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.winding_des2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	winding_des2: prismic.KeyTextField;
	
	/**
	 * winding des3 field in *SPCF 12K Tow*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.winding_des3
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	winding_des3: prismic.KeyTextField;
	
	/**
	 * winding des4 field in *SPCF 12K Tow*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.winding_des4
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	winding_des4: prismic.KeyTextField;
	
	/**
	 * winding des5 field in *SPCF 12K Tow*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.winding_des5
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	winding_des5: prismic.KeyTextField;
	
	/**
	 * Typical Properties field in *SPCF 12K Tow*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.typical_properties[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	typical_properties: prismic.GroupField<Simplify<Spcf12KTowDocumentDataTypicalPropertiesItem>>;
	
	/**
	 * Available options field in *SPCF 12K Tow*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.available_options[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	available_options: prismic.GroupField<Simplify<Spcf12KTowDocumentDataAvailableOptionsItem>>;
	
	/**
	 * Tell us title field in *SPCF 12K Tow*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.tell_us_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	tell_us_title: prismic.KeyTextField;
	
	/**
	 * Tell us subtitle field in *SPCF 12K Tow*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.tell_us_subtitle
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	tell_us_subtitle: prismic.KeyTextField;
	
	/**
	 * Tell us des field in *SPCF 12K Tow*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.tell_us_des
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	tell_us_des: prismic.KeyTextField;
	
	/**
	 * Tell us button1 field in *SPCF 12K Tow*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.tell_us_button1
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	tell_us_button1: prismic.KeyTextField;
	
	/**
	 * Tell us button2 field in *SPCF 12K Tow*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.tell_us_button2
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	tell_us_button2: prismic.KeyTextField;
	
	/**
	 * faqs field in *SPCF 12K Tow*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: spcf_12_k_tow.faqs[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	faqs: prismic.GroupField<Simplify<Spcf12KTowDocumentDataFaqsItem>>;
}

/**
 * SPCF 12K Tow document from Prismic
 *
 * - **API ID**: `spcf_12_k_tow`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/content-modeling
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type Spcf12KTowDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<Spcf12KTowDocumentData>, "spcf_12_k_tow", Lang>;

export type AllDocumentTypes = AboutUsDocument | BlogDocument | BlogpageDocument | ChhopedCarbonDocument | ChhopedCarbonFiberDocument | ContactSubmissionDocument | ContactUsDocument | FiberSizingDocument | HomepageDocument | MyPageDocument | PhlexCarbonCfmDocument | PhlexCarbonFctmDocument | PhlexhomepageDocument | Spcf12KTowDocument;

/**
 * Item in *Card Grid → Default → Primary → Cards*
 */
export interface CardGridSliceDefaultPrimaryCardsItem {
	/**
	 * Title field in *Card Grid → Default → Primary → Cards*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: card_grid.default.primary.cards[].title
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	title: prismic.KeyTextField;
	
	/**
	 * Description field in *Card Grid → Default → Primary → Cards*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: card_grid.default.primary.cards[].description
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	description: prismic.RichTextField;
	
	/**
	 * Image field in *Card Grid → Default → Primary → Cards*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: card_grid.default.primary.cards[].image
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	image: prismic.ImageField<never>;
}

/**
 * Primary content in *Card Grid → Default → Primary*
 */
export interface CardGridSliceDefaultPrimary {
	/**
	 * Cards field in *Card Grid → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: card_grid.default.primary.cards[]
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	cards: prismic.GroupField<Simplify<CardGridSliceDefaultPrimaryCardsItem>>;
}

/**
 * Default variation for Card Grid Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type CardGridSliceDefault = prismic.SharedSliceVariation<"default", Simplify<CardGridSliceDefaultPrimary>, never>;

/**
 * Slice variation for *Card Grid*
 */
type CardGridSliceVariation = CardGridSliceDefault

/**
 * Card Grid Shared Slice
 *
 * - **API ID**: `card_grid`
 * - **Description**: *None*
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type CardGridSlice = prismic.SharedSlice<"card_grid", CardGridSliceVariation>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
	/**
	 * Headline field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.headline
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	headline: prismic.RichTextField;
	
	/**
	 * Description field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.description
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	description: prismic.RichTextField;
	
	/**
	 * Background Image field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.background_image
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	background_image: prismic.ImageField<never>;
	
	/**
	 * Interface Image field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.interface_image
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	interface_image: prismic.ImageField<never>;
	
	/**
	 * Logo field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.logo
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	logo: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default variation
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<"default", Simplify<HeroSliceDefaultPrimary>, never>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero section with text, image, and buttons
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *HeroBanner → Default → Primary*
 */
export interface HeroBannerSliceDefaultPrimary {
	/**
	 * background image field in *HeroBanner → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero_banner.default.primary.background_image
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	background_image: prismic.ImageField<never>;
	
	/**
	 * Title field in *HeroBanner → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero_banner.default.primary.title
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	title: prismic.RichTextField;
	
	/**
	 * SubTitle field in *HeroBanner → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero_banner.default.primary.sub_title
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	sub_title: prismic.KeyTextField;
	
	/**
	 * descriprtions field in *HeroBanner → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero_banner.default.primary.descriprtion
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	descriprtion: prismic.KeyTextField;
}

/**
 * Default variation for HeroBanner Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type HeroBannerSliceDefault = prismic.SharedSliceVariation<"default", Simplify<HeroBannerSliceDefaultPrimary>, never>;

/**
 * Slice variation for *HeroBanner*
 */
type HeroBannerSliceVariation = HeroBannerSliceDefault

/**
 * HeroBanner Shared Slice
 *
 * - **API ID**: `hero_banner`
 * - **Description**: HeroBanner
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type HeroBannerSlice = prismic.SharedSlice<"hero_banner", HeroBannerSliceVariation>;

/**
 * Item in *Resource Links → Default → Primary → Resources*
 */
export interface ResourceLinksSliceDefaultPrimaryResourcesItem {
	/**
	 * Title field in *Resource Links → Default → Primary → Resources*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: resource_links.default.primary.resources[].title
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	title: prismic.KeyTextField;
	
	/**
	 * Description field in *Resource Links → Default → Primary → Resources*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: resource_links.default.primary.resources[].description
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	description: prismic.KeyTextField;
	
	/**
	 * Link field in *Resource Links → Default → Primary → Resources*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: resource_links.default.primary.resources[].link
	 * - **Documentation**: https://prismic.io/docs/fields/link
	 */
	link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Primary content in *Resource Links → Default → Primary*
 */
export interface ResourceLinksSliceDefaultPrimary {
	/**
	 * Resources field in *Resource Links → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: resource_links.default.primary.resources[]
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	resources: prismic.GroupField<Simplify<ResourceLinksSliceDefaultPrimaryResourcesItem>>;
	
	/**
	 * Call to Action Heading field in *Resource Links → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: resource_links.default.primary.cta_heading
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	cta_heading: prismic.KeyTextField;
	
	/**
	 * Call to Action Link field in *Resource Links → Default → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: resource_links.default.primary.cta_link
	 * - **Documentation**: https://prismic.io/docs/fields/link
	 */
	cta_link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Default variation for Resource Links Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type ResourceLinksSliceDefault = prismic.SharedSliceVariation<"default", Simplify<ResourceLinksSliceDefaultPrimary>, never>;

/**
 * Slice variation for *Resource Links*
 */
type ResourceLinksSliceVariation = ResourceLinksSliceDefault

/**
 * Resource Links Shared Slice
 *
 * - **API ID**: `resource_links`
 * - **Description**: *None*
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type ResourceLinksSlice = prismic.SharedSlice<"resource_links", ResourceLinksSliceVariation>;

declare module "@prismicio/client" {
	interface CreateClient {
		(repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
	}
	
	interface CreateWriteClient {
		(repositoryNameOrEndpoint: string, options: prismic.WriteClientConfig): prismic.WriteClient<AllDocumentTypes>;
	}
	
	interface CreateMigration {
		(): prismic.Migration<AllDocumentTypes>;
	}
	
	namespace Content {
		export type {
			AboutUsDocument,
			AboutUsDocumentData,
			AboutUsDocumentDataBuiltCardItem,
			AboutUsDocumentDataPathFlowItem,
			BlogDocument,
			BlogDocumentData,
			BlogDocumentDataSidebarLinksListItem,
			BlogpageDocument,
			BlogpageDocumentData,
			ChhopedCarbonDocument,
			ChhopedCarbonDocumentData,
			ChhopedCarbonDocumentDataPhlexOptionsCardItem,
			ChhopedCarbonDocumentDataTypicalPropertiesItem,
			ChhopedCarbonDocumentDataStandardPropertiesItem,
			ChhopedCarbonDocumentDataFaqItem,
			ChhopedCarbonFiberDocument,
			ChhopedCarbonFiberDocumentData,
			ChhopedCarbonFiberDocumentDataTypicalPropertiesItem,
			ChhopedCarbonFiberDocumentDataStandardPropertiesItem,
			ChhopedCarbonFiberDocumentDataCarbonFiberPropertiesItem,
			ChhopedCarbonFiberDocumentDataFiberSectionRowsItem,
			ChhopedCarbonFiberDocumentDataPhlexWeightsSectionItem,
			ChhopedCarbonFiberDocumentDataFaqItem,
			ChhopedCarbonFiberDocumentDataPhlexOptionsCardItem,
			ContactSubmissionDocument,
			ContactSubmissionDocumentData,
			ContactUsDocument,
			ContactUsDocumentData,
			FiberSizingDocument,
			FiberSizingDocumentData,
			FiberSizingDocumentDataProductsItem,
			FiberSizingDocumentDataFaqsItem,
			HomepageDocument,
			HomepageDocumentData,
			HomepageDocumentDataSlicesSlice,
			MyPageDocument,
			MyPageDocumentData,
			MyPageDocumentDataSlicesSlice,
			PhlexCarbonCfmDocument,
			PhlexCarbonCfmDocumentData,
			PhlexCarbonCfmDocumentDataTypicalPropertiesItem,
			PhlexCarbonCfmDocumentDataCarbonFiberPropertiesItem,
			PhlexCarbonCfmDocumentDataArealWeightsItem,
			PhlexCarbonCfmDocumentDataFaqsItem,
			PhlexCarbonFctmDocument,
			PhlexCarbonFctmDocumentData,
			PhlexCarbonFctmDocumentDataTypicalPropertiesItem,
			PhlexCarbonFctmDocumentDataStandardPropertiesItem,
			PhlexCarbonFctmDocumentDataCarbonFiberPropertiesItem,
			PhlexCarbonFctmDocumentDataFiberSectionRowsItem,
			PhlexCarbonFctmDocumentDataPhlexWeightsSectionItem,
			PhlexCarbonFctmDocumentDataFaqItem,
			PhlexCarbonFctmDocumentDataPhlexOptionsCardItem,
			PhlexhomepageDocument,
			PhlexhomepageDocumentData,
			PhlexhomepageDocumentDataProductCardItem,
			PhlexhomepageDocumentDataDemandGroupItem,
			PhlexhomepageDocumentDataWhyCardItem,
			Spcf12KTowDocument,
			Spcf12KTowDocumentData,
			Spcf12KTowDocumentDataTypicalPropertiesItem,
			Spcf12KTowDocumentDataAvailableOptionsItem,
			Spcf12KTowDocumentDataFaqsItem,
			AllDocumentTypes,
			CardGridSlice,
			CardGridSliceDefaultPrimaryCardsItem,
			CardGridSliceDefaultPrimary,
			CardGridSliceVariation,
			CardGridSliceDefault,
			HeroSlice,
			HeroSliceDefaultPrimary,
			HeroSliceVariation,
			HeroSliceDefault,
			HeroBannerSlice,
			HeroBannerSliceDefaultPrimary,
			HeroBannerSliceVariation,
			HeroBannerSliceDefault,
			ResourceLinksSlice,
			ResourceLinksSliceDefaultPrimaryResourcesItem,
			ResourceLinksSliceDefaultPrimary,
			ResourceLinksSliceVariation,
			ResourceLinksSliceDefault
		}
	}
}