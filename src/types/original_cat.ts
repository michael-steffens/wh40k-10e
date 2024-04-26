export interface OriginalCataloge {
  type: string;
  publications: Publication[];
  categoryEntries: CategoryEntry[];
  sharedSelectionEntries: SharedSelectionEntry[];
  sharedSelectionEntryGroups: SharedSelectionEntryGroup[];
  sharedRules: SharedRule[];
  catalogueLinks: CatalogueLink[];
  sharedProfiles: SharedProfile[];
  "#text": string;
  id: string;
  name: string;
  revision: number;
  battleScribeVersion: number;
  library: boolean;
  gameSystemId: string;
  gameSystemRevision: number;
}

export interface Publication {
  id: string;
  name: string;
  shortName: string;
  publisher: string;
  publicationDate: string;
}

export interface CategoryEntry {
  id: string;
  name: string;
  hidden: boolean;
  constraints?: Constraint[];
  modifiers?: Modifier[];
  "#text"?: string;
}

export interface Constraint {
  type: string;
  value: number;
  field: string;
  scope: string;
  shared: boolean;
  id: string;
  includeChildSelections: boolean;
  includeChildForces: boolean;
}

export interface Modifier {
  conditionGroups?: ConditionGroup[];
  "#text": string;
  type: string;
  value: any;
  field: string;
  conditions?: Condition2[];
}

export interface ConditionGroup {
  conditions: Condition[];
  "#text": string;
  type: string;
}

export interface Condition {
  type: string;
  value: number;
  field: string;
  scope: string;
  childId: string;
  shared: boolean;
  includeChildSelections?: boolean;
}

export interface Condition2 {
  type: string;
  value: number;
  field: string;
  scope: string;
  childId: string;
  shared: boolean;
}

export interface SharedSelectionEntry {
  constraints?: Constraint2[];
  profiles?: Profile[];
  infoLinks?: InfoLink[];
  categoryLinks?: CategoryLink[];
  selectionEntries?: SelectionEntry[];
  entryLinks?: EntryLink2[];
  costs?: Cost3[];
  modifiers?: Modifier5[];
  "#text"?: string;
  id: string;
  name: string;
  publicationId?: string;
  page?: number;
  hidden: boolean;
  collective?: boolean;
  type: string;
  selectionEntryGroups?: SelectionEntryGroup2[];
  modifierGroups?: ModifierGroup[];
  comment?: string;
}

export interface Constraint2 {
  type: string;
  value: number;
  field: string;
  scope: string;
  shared: boolean;
  id: string;
  includeChildSelections?: boolean;
  percentValue?: boolean;
  includeChildForces?: boolean;
}

export interface Profile {
  characteristics: Characteristic[];
  "#text": string;
  name: string;
  typeId: string;
  typeName: string;
  hidden: boolean;
  id: string;
  modifiers?: Modifier2[];
}

export interface Characteristic {
  "#text"?: string;
  name: string;
  typeId: string;
}

export interface Modifier2 {
  conditions: Condition3[];
  "#text": string;
  type: string;
  value: boolean;
  field: string;
}

export interface Condition3 {
  type: string;
  value: number;
  field: string;
  scope: string;
  childId: string;
  shared: boolean;
  id?: string;
}

export interface InfoLink {
  name: string;
  hidden: boolean;
  type: string;
  id: string;
  targetId: string;
  modifiers?: Modifier3[];
  "#text"?: string;
}

export interface Modifier3 {
  type: string;
  field: string;
  value: any;
  conditions?: Condition4[];
  "#text"?: string;
}

export interface Condition4 {
  type: string;
  value: number;
  field: string;
  scope: string;
  childId: string;
  shared: boolean;
  id?: string;
}

export interface CategoryLink {
  targetId: string;
  id: string;
  primary: boolean;
  name: string;
  hidden?: boolean;
}

export interface SelectionEntry {
  constraints?: Constraint3[];
  profiles?: Profile2[];
  "#text": string;
  type: string;
  name: string;
  hidden: boolean;
  id: string;
  entryLinks?: EntryLink[];
  selectionEntryGroups?: SelectionEntryGroup[];
  selectionEntries?: SelectionEntry3[];
  costs?: Cost2[];
  infoLinks?: InfoLink4[];
  collective?: boolean;
  rules?: Rule[];
  categoryLinks?: CategoryLink2[];
}

export interface Constraint3 {
  type: string;
  value: number;
  field: string;
  scope: string;
  shared: boolean;
  id: string;
  percentValue?: boolean;
  includeChildSelections?: boolean;
  includeChildForces?: boolean;
}

export interface Profile2 {
  characteristics: Characteristic2[];
  "#text": string;
  name: string;
  typeId: string;
  typeName: string;
  hidden: boolean;
  id: string;
}

export interface Characteristic2 {
  "#text"?: string;
  name: string;
  typeId: string;
}

export interface EntryLink {
  name: string;
  hidden: boolean;
  type: string;
  id: string;
  targetId: string;
}

export interface SelectionEntryGroup {
  selectionEntries: SelectionEntry2[];
  constraints: Constraint5[];
  "#text": string;
  name: string;
  hidden: boolean;
  id: string;
  defaultSelectionEntryId?: string;
  collective?: boolean;
}

export interface SelectionEntry2 {
  profiles: Profile3[];
  "#text": string;
  type: string;
  name: string;
  hidden: boolean;
  id: string;
  infoLinks?: InfoLink2[];
  constraints?: Constraint4[];
  collective?: boolean;
  costs?: Cost[];
}

export interface Profile3 {
  characteristics: Characteristic3[];
  "#text": string;
  name: string;
  typeId: string;
  typeName: string;
  hidden: boolean;
  id: string;
}

export interface Characteristic3 {
  "#text"?: string;
  name: string;
  typeId: string;
}

export interface InfoLink2 {
  name: string;
  hidden: boolean;
  type: string;
  id: string;
  targetId: string;
}

export interface Constraint4 {
  type: string;
  value: number;
  field: string;
  scope: string;
  shared: boolean;
  id: string;
  percentValue?: boolean;
  includeChildSelections?: boolean;
  includeChildForces?: boolean;
}

export interface Cost {
  name: string;
  typeId: string;
  value: number;
}

export interface Constraint5 {
  type: string;
  value: number;
  field: string;
  scope: string;
  shared: boolean;
  id: string;
  percentValue?: boolean;
  includeChildSelections?: boolean;
  includeChildForces?: boolean;
}

export interface SelectionEntry3 {
  profiles: Profile4[];
  constraints: Constraint6[];
  "#text": string;
  type: string;
  name: string;
  hidden: boolean;
  id: string;
  infoLinks?: InfoLink3[];
  collective?: boolean;
}

export interface Profile4 {
  characteristics: Characteristic4[];
  "#text": string;
  name: string;
  typeId: string;
  typeName: string;
  hidden: boolean;
  id: string;
}

export interface Characteristic4 {
  "#text"?: string;
  name: string;
  typeId: string;
}

export interface Constraint6 {
  type: string;
  value: number;
  field: string;
  scope: string;
  shared: boolean;
  id: string;
}

export interface InfoLink3 {
  name: string;
  hidden: boolean;
  type: string;
  id: string;
  targetId: string;
}

export interface Cost2 {
  name: string;
  typeId: string;
  value: number;
}

export interface InfoLink4 {
  name: string;
  hidden: boolean;
  type: string;
  id: string;
  targetId: string;
}

export interface Rule {
  description: string;
  "#text": string;
  name: string;
  hidden: boolean;
  id: string;
}

export interface CategoryLink2 {
  targetId: string;
  id: string;
  primary: boolean;
  name: string;
}

export interface EntryLink2 {
  modifiers?: Modifier4[];
  "#text"?: string;
  name: string;
  hidden: boolean;
  type: string;
  id: string;
  targetId: string;
  constraints?: Constraint7[];
  collective?: boolean;
}

export interface Modifier4 {
  conditions?: Condition5[];
  "#text"?: string;
  type: string;
  value: any;
  field: string;
}

export interface Condition5 {
  type: string;
  value: number;
  field: string;
  scope: string;
  childId: string;
  shared: boolean;
  id?: string;
}

export interface Constraint7 {
  type: string;
  value: number;
  field: string;
  scope: string;
  shared: boolean;
  id: string;
}

export interface Cost3 {
  name: string;
  typeId: string;
  value: number;
}

export interface Modifier5 {
  conditions?: Condition6[];
  "#text": string;
  type: string;
  value: any;
  field: string;
  conditionGroups?: ConditionGroup2[];
  repeats?: Repeat[];
}

export interface Condition6 {
  type: string;
  value: number;
  field: string;
  scope: string;
  childId: string;
  shared: boolean;
  includeChildSelections?: boolean;
  includeChildForces?: boolean;
  percentValue?: boolean;
  id?: string;
}

export interface ConditionGroup2 {
  conditions: Condition7[];
  "#text": string;
  type: string;
  conditionGroups?: ConditionGroup3[];
}

export interface Condition7 {
  type: string;
  value: number;
  field: string;
  scope: string;
  childId: string;
  shared: boolean;
  includeChildSelections?: boolean;
  includeChildForces?: boolean;
}

export interface ConditionGroup3 {
  conditions: Condition8[];
  "#text": string;
  type: string;
}

export interface Condition8 {
  type: string;
  value: number;
  field: string;
  scope: string;
  childId: string;
  shared: boolean;
  includeChildSelections: boolean;
}

export interface Repeat {
  value: number;
  repeats: number;
  field: string;
  scope: string;
  childId: string;
  shared: boolean;
  roundUp: boolean;
  id: string;
  includeChildSelections: boolean;
}

export interface SelectionEntryGroup2 {
  selectionEntries: SelectionEntry4[];
  constraints?: Constraint13[];
  "#text": string;
  name: string;
  hidden: boolean;
  id: string;
  defaultSelectionEntryId?: string;
  selectionEntryGroups?: SelectionEntryGroup4[];
  collective?: boolean;
  modifiers?: Modifier10[];
}

export interface SelectionEntry4 {
  selectionEntries?: SelectionEntry5[];
  selectionEntryGroups?: SelectionEntryGroup3[];
  profiles?: Profile7[];
  entryLinks?: EntryLink4[];
  "#text": string;
  type: string;
  name: string;
  hidden: boolean;
  id: string;
  collective?: boolean;
  constraints?: Constraint12[];
  infoLinks?: InfoLink7[];
  costs?: Cost6[];
  modifiers?: Modifier8[];
  categoryLinks?: CategoryLink4[];
}

export interface SelectionEntry5 {
  constraints?: Constraint8[];
  profiles?: Profile5[];
  "#text": string;
  type: string;
  name: string;
  hidden: boolean;
  id: string;
  infoLinks?: InfoLink5[];
  collective?: boolean;
  categoryLinks?: CategoryLink3[];
  costs?: Cost4[];
}

export interface Constraint8 {
  type: string;
  value: number;
  field: string;
  scope: string;
  shared: boolean;
  id: string;
  percentValue?: boolean;
  includeChildSelections?: boolean;
  includeChildForces?: boolean;
}

export interface Profile5 {
  characteristics: Characteristic5[];
  "#text": string;
  name: string;
  typeId: string;
  typeName: string;
  hidden: boolean;
  id: string;
}

export interface Characteristic5 {
  "#text"?: string;
  name: string;
  typeId: string;
}

export interface InfoLink5 {
  name: string;
  hidden: boolean;
  type: string;
  id: string;
  targetId: string;
}

export interface CategoryLink3 {
  targetId: string;
  id: string;
  primary: boolean;
  name: string;
}

export interface Cost4 {
  name: string;
  typeId: string;
  value: number;
}

export interface SelectionEntryGroup3 {
  constraints: Constraint9[];
  selectionEntries: SelectionEntry6[];
  "#text": string;
  name: string;
  hidden: boolean;
  id: string;
  defaultSelectionEntryId?: string;
  entryLinks?: EntryLink3[];
  collective?: boolean;
}

export interface Constraint9 {
  type: string;
  value: number;
  field: string;
  scope: string;
  shared: boolean;
  id: string;
  percentValue?: boolean;
  includeChildSelections?: boolean;
  includeChildForces?: boolean;
}

export interface SelectionEntry6 {
  profiles: Profile6[];
  infoLinks?: InfoLink6[];
  "#text": string;
  type: string;
  name: string;
  hidden: boolean;
  id: string;
  collective?: boolean;
  costs?: Cost5[];
  constraints?: Constraint10[];
}

export interface Profile6 {
  characteristics: Characteristic6[];
  "#text": string;
  name: string;
  typeId: string;
  typeName: string;
  hidden: boolean;
  id: string;
}

export interface Characteristic6 {
  "#text"?: string;
  name: string;
  typeId: string;
}

export interface InfoLink6 {
  name: string;
  hidden: boolean;
  type: string;
  id: string;
  targetId: string;
}

export interface Cost5 {
  name: string;
  typeId: string;
  value: number;
}

export interface Constraint10 {
  type: string;
  value: number;
  field: string;
  scope: string;
  shared: boolean;
  id: string;
  percentValue?: boolean;
  includeChildSelections?: boolean;
  includeChildForces?: boolean;
}

export interface EntryLink3 {
  name: string;
  hidden: boolean;
  type: string;
  id: string;
  targetId: string;
}

export interface Profile7 {
  characteristics: Characteristic7[];
  "#text": string;
  id: string;
  name: string;
  hidden: boolean;
  typeId: string;
  typeName: string;
}

export interface Characteristic7 {
  "#text"?: string;
  name: string;
  typeId: string;
}

export interface EntryLink4 {
  name: string;
  hidden: boolean;
  type: string;
  id: string;
  targetId: string;
  collective?: boolean;
  constraints?: Constraint11[];
  "#text"?: string;
  modifiers?: Modifier6[];
}

export interface Constraint11 {
  type: string;
  value: number;
  field: string;
  scope: string;
  shared: boolean;
  id: string;
  includeChildSelections?: boolean;
}

export interface Modifier6 {
  conditions: Condition9[];
  "#text": string;
  type: string;
  value: number;
  field: string;
  id: string;
}

export interface Condition9 {
  type: string;
  value: number;
  field: string;
  scope: string;
  childId: string;
  shared: boolean;
  id: string;
  includeChildSelections: boolean;
}

export interface Constraint12 {
  field: string;
  scope: string;
  value: number;
  percentValue?: boolean;
  shared: boolean;
  includeChildSelections?: boolean;
  includeChildForces?: boolean;
  id: string;
  type: string;
}

export interface InfoLink7 {
  id: string;
  name: string;
  hidden: boolean;
  targetId: string;
  type: string;
  modifiers?: Modifier7[];
  "#text"?: string;
}

export interface Modifier7 {
  type: string;
  value: string;
  field: string;
}

export interface Cost6 {
  name: string;
  typeId: string;
  value: number;
}

export interface Modifier8 {
  type: string;
  value: any;
  field: string;
  id?: string;
  conditions?: Condition10[];
  "#text"?: string;
  conditionGroups?: ConditionGroup4[];
  repeats?: Repeat2[];
}

export interface Condition10 {
  type: string;
  value: number;
  field: string;
  scope: string;
  childId: string;
  shared: boolean;
  includeChildSelections?: boolean;
  percentValue?: boolean;
  includeChildForces?: boolean;
}

export interface ConditionGroup4 {
  conditions: Condition11[];
  "#text": string;
  type: string;
}

export interface Condition11 {
  type: string;
  value: number;
  field: string;
  scope: string;
  childId: string;
  shared: boolean;
  percentValue?: boolean;
  includeChildSelections: boolean;
  includeChildForces?: boolean;
}

export interface Repeat2 {
  field: string;
  scope: string;
  value: number;
  percentValue?: boolean;
  shared: boolean;
  includeChildSelections: boolean;
  includeChildForces?: boolean;
  childId: string;
  repeats: number;
  roundUp: boolean;
  id?: string;
}

export interface CategoryLink4 {
  id: string;
  name: string;
  hidden: boolean;
  targetId: string;
  primary: boolean;
}

export interface Constraint13 {
  type: string;
  value: number;
  field: string;
  scope: string;
  shared: boolean;
  id: string;
  percentValue?: boolean;
  includeChildSelections?: boolean;
  includeChildForces?: boolean;
}

export interface SelectionEntryGroup4 {
  constraints: Constraint14[];
  selectionEntries: SelectionEntry7[];
  modifiers: Modifier9[];
  "#text": string;
  name: string;
  hidden: boolean;
  id: string;
}

export interface Constraint14 {
  type: string;
  value: number;
  field: string;
  scope: string;
  shared: boolean;
  id: string;
}

export interface SelectionEntry7 {
  entryLinks: EntryLink5[];
  selectionEntries: SelectionEntry8[];
  constraints: Constraint16[];
  infoLinks: InfoLink9[];
  "#text": string;
  type: string;
  name: string;
  hidden: boolean;
  id: string;
}

export interface EntryLink5 {
  name: string;
  hidden: boolean;
  type: string;
  id: string;
  targetId: string;
  collective: boolean;
}

export interface SelectionEntry8 {
  profiles: Profile8[];
  constraints: Constraint15[];
  "#text": string;
  type: string;
  name: string;
  hidden: boolean;
  id: string;
  collective: boolean;
  infoLinks?: InfoLink8[];
}

export interface Profile8 {
  characteristics: Characteristic8[];
  "#text": string;
  name: string;
  typeId: string;
  typeName: string;
  hidden: boolean;
  id: string;
}

export interface Characteristic8 {
  "#text": string;
  name: string;
  typeId: string;
}

export interface Constraint15 {
  type: string;
  value: number;
  field: string;
  scope: string;
  shared: boolean;
  id: string;
}

export interface InfoLink8 {
  name: string;
  hidden: boolean;
  type: string;
  id: string;
  targetId: string;
}

export interface Constraint16 {
  type: string;
  value: number;
  field: string;
  scope: string;
  shared: boolean;
  id: string;
}

export interface InfoLink9 {
  name: string;
  hidden: boolean;
  type: string;
  id: string;
  targetId: string;
}

export interface Modifier9 {
  conditions: Condition12[];
  "#text": string;
  type: string;
  value: number;
  field: string;
  id: string;
}

export interface Condition12 {
  type: string;
  value: number;
  field: string;
  scope: string;
  childId: string;
  shared: boolean;
  includeChildSelections: boolean;
}

export interface Modifier10 {
  conditions: Condition13[];
  "#text": string;
  type: string;
  value: number;
  field: string;
}

export interface Condition13 {
  field: string;
  scope: string;
  value: number;
  percentValue: boolean;
  shared: boolean;
  includeChildSelections: boolean;
  includeChildForces: boolean;
  childId: string;
  type: string;
}

export interface ModifierGroup {
  modifiers: Modifier11[];
  "#text": string;
}

export interface Modifier11 {
  conditionGroups?: ConditionGroup5[];
  "#text": string;
  type: string;
  field: string;
  value: number;
  conditions?: Condition16[];
}

export interface ConditionGroup5 {
  conditions?: Condition14[];
  "#text": string;
  type: string;
  conditionGroups?: ConditionGroup6[];
}

export interface Condition14 {
  field: string;
  scope: string;
  value: number;
  percentValue: boolean;
  shared: boolean;
  includeChildSelections: boolean;
  includeChildForces: boolean;
  childId: string;
  type: string;
}

export interface ConditionGroup6 {
  conditions: Condition15[];
  "#text": string;
  type: string;
}

export interface Condition15 {
  field: string;
  scope: string;
  value: number;
  percentValue?: boolean;
  shared: boolean;
  includeChildSelections: boolean;
  includeChildForces?: boolean;
  childId: string;
  type: string;
}

export interface Condition16 {
  type: string;
  value: number;
  field: string;
  scope: string;
  childId: string;
  shared: boolean;
  includeChildSelections: boolean;
  percentValue?: boolean;
  includeChildForces?: boolean;
}

export interface SharedSelectionEntryGroup {
  entryLinks?: EntryLink6[];
  modifiers?: Modifier13[];
  constraints?: Constraint18[];
  "#text": string;
  id: string;
  name: string;
  hidden: boolean;
  collective?: boolean;
  selectionEntries?: SelectionEntry9[];
  defaultSelectionEntryId?: string;
}

export interface EntryLink6 {
  id: string;
  name: string;
  hidden: boolean;
  collective: boolean;
  targetId: string;
  type: string;
  constraints?: Constraint17[];
  "#text"?: string;
  modifiers?: Modifier12[];
}

export interface Constraint17 {
  type: string;
  value: number;
  field: string;
  scope: string;
  shared: boolean;
  id: string;
  includeChildSelections?: boolean;
  includeChildForces?: boolean;
}

export interface Modifier12 {
  conditions: Condition17[];
  "#text": string;
  type: string;
  value: boolean;
  field: string;
}

export interface Condition17 {
  type: string;
  value: number;
  field: string;
  scope: string;
  childId: string;
  shared: boolean;
}

export interface Modifier13 {
  conditions?: Condition18[];
  "#text": string;
  type: string;
  value: boolean;
  field: string;
  conditionGroups?: ConditionGroup7[];
}

export interface Condition18 {
  type: string;
  value: number;
  field: string;
  scope: string;
  childId: string;
  shared: boolean;
  includeChildSelections: boolean;
}

export interface ConditionGroup7 {
  conditionGroups: ConditionGroup8[];
  conditions: Condition20[];
  "#text": string;
  type: string;
}

export interface ConditionGroup8 {
  conditions: Condition19[];
  "#text": string;
  type: string;
}

export interface Condition19 {
  type: string;
  value: number;
  field: string;
  scope: string;
  childId: string;
  shared: boolean;
}

export interface Condition20 {
  type: string;
  value: number;
  field: string;
  scope: string;
  childId: string;
  shared: boolean;
  includeChildSelections: boolean;
  includeChildForces?: boolean;
}

export interface Constraint18 {
  type: string;
  value: number;
  field: string;
  scope: string;
  shared: boolean;
  id: string;
  includeChildSelections?: boolean;
  includeChildForces?: boolean;
}

export interface SelectionEntry9 {
  modifiers?: Modifier14[];
  rules?: Rule2[];
  "#text": string;
  type: string;
  name: string;
  hidden: boolean;
  id: string;
  costs?: Cost7[];
  constraints?: Constraint19[];
  profiles?: Profile9[];
  collective?: boolean;
}

export interface Modifier14 {
  conditionGroups?: ConditionGroup9[];
  "#text": string;
  type: string;
  value: boolean;
  field: string;
  conditions?: Condition22[];
}

export interface ConditionGroup9 {
  conditions: Condition21[];
  "#text": string;
  type: string;
}

export interface Condition21 {
  type: string;
  value: number;
  field: string;
  scope: string;
  childId: string;
  shared: boolean;
}

export interface Condition22 {
  type: string;
  value: number;
  field: string;
  scope: string;
  childId: string;
  shared: boolean;
}

export interface Rule2 {
  description: string;
  "#text": string;
  name: string;
  hidden: boolean;
  id: string;
}

export interface Cost7 {
  name: string;
  typeId: string;
  value: number;
}

export interface Constraint19 {
  type: string;
  value: number;
  field: string;
  scope: string;
  shared: boolean;
  id: string;
  includeChildSelections?: boolean;
}

export interface Profile9 {
  characteristics: Characteristic9[];
  "#text": string;
  name: string;
  typeId: string;
  typeName: string;
  hidden: boolean;
  id: string;
}

export interface Characteristic9 {
  "#text": string;
  name: string;
  typeId: string;
}

export interface SharedRule {
  description: string;
  "#text": string;
  id: string;
  name: string;
  hidden: boolean;
  modifiers?: Modifier15[];
}

export interface Modifier15 {
  conditions: Condition23[];
  "#text": string;
  type: string;
  value: boolean;
  field: string;
}

export interface Condition23 {
  type: string;
  value: number;
  field: string;
  scope: string;
  childId: string;
  shared: boolean;
  id: string;
}

export interface CatalogueLink {
  type: string;
  name: string;
  id: string;
  targetId: string;
  importRootEntries: boolean;
}

export interface SharedProfile {
  characteristics: Characteristic10[];
  "#text": string;
  name: string;
  typeId: string;
  typeName: string;
  hidden: boolean;
  id: string;
}

export interface Characteristic10 {
  "#text": string;
  name: string;
  typeId: string;
}
