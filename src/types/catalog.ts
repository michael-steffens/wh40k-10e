export interface Catalog {
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
  includeChildSelections?: boolean;
  percentValue?: boolean;
  includeChildForces?: boolean;
}

export interface Modifier {
  conditionGroups?: ConditionGroup[];
  conditions?: Condition[];
  "#text"?: string;
  repeats?: Repeat[];
  id?: string;
  type: string;
  value: any;
  field: string;
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
  includeChildForces?: boolean;
  percentValue?: boolean;
  id?: string;
}

export interface SharedSelectionEntry {
  constraints?: Constraint[];
  profiles?: Profile[];
  infoLinks?: InfoLink[];
  categoryLinks?: CategoryLink[];
  selectionEntries?: SelectionEntry[];
  entryLinks?: EntryLink2[];
  costs?: Cost3[];
  modifiers?: Modifier[];
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

export interface Profile {
  characteristics: Characteristic[];
  "#text": string;
  name: string;
  typeId: string;
  typeName: string;
  hidden: boolean;
  id: string;
  modifiers?: Modifier[];
}

export interface Characteristic {
  "#text"?: string;
  name: string;
  typeId: string;
}

export interface InfoLink {
  name: string;
  hidden: boolean;
  type: string;
  id: string;
  targetId: string;
  modifiers?: Modifier[];
  "#text"?: string;
}
export interface CategoryLink {
  targetId: string;
  id: string;
  primary: boolean;
  name: string;
  hidden?: boolean;
}

export interface SelectionEntry {
  constraints?: Constraint[];
  profiles?: Profile[];
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

export interface SelectionEntry2 {
  profiles: Profile[];
  "#text": string;
  type: string;
  name: string;
  hidden: boolean;
  id: string;
  infoLinks?: InfoLink2[];
  constraints?: Constraint[];
  collective?: boolean;
  costs?: Cost[];
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
  constraints: Constraint[];
  "#text": string;
  name: string;
  hidden: boolean;
  id: string;
  defaultSelectionEntryId?: string;
  collective?: boolean;
}

export interface InfoLink2 {
  name: string;
  hidden: boolean;
  type: string;
  id: string;
  targetId: string;
}

export interface Cost {
  name: string;
  typeId: string;
  value: number;
}

export interface SelectionEntry3 {
  profiles: Profile[];
  constraints: Constraint[];
  "#text": string;
  type: string;
  name: string;
  hidden: boolean;
  id: string;
  infoLinks?: InfoLink3[];
  collective?: boolean;
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
  modifiers?: Modifier[];
  "#text"?: string;
  name: string;
  hidden: boolean;
  type: string;
  id: string;
  targetId: string;
  constraints?: Constraint[];
  collective?: boolean;
}

export interface Cost3 {
  name: string;
  typeId: string;
  value: number;
}

export interface Condition6 {
  type: string;
  value: number;
  field: string;
  scope: string;
  childId: string;
  shared: boolean;
}

export interface ConditionGroup2 {
  conditions: Condition[];
  "#text": string;
  type: string;
  conditionGroups?: ConditionGroup3[];
}

export interface ConditionGroup3 {
  conditions: Condition[];
  "#text": string;
  type: string;
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
  constraints?: Constraint[];
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
  profiles?: Profile[];
  entryLinks?: EntryLink4[];
  "#text": string;
  type: string;
  name: string;
  hidden: boolean;
  id: string;
  collective?: boolean;
  constraints?: Constraint[];
  infoLinks?: InfoLink7[];
  costs?: Cost6[];
  modifiers?: Modifier8[];
  categoryLinks?: CategoryLink4[];
}

export interface SelectionEntry5 {
  constraints?: Constraint[];
  profiles?: Profile[];
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
  constraints: Constraint[];
  selectionEntries: SelectionEntry6[];
  "#text": string;
  name: string;
  hidden: boolean;
  id: string;
  defaultSelectionEntryId?: string;
  entryLinks?: EntryLink3[];
  collective?: boolean;
}

export interface SelectionEntry6 {
  profiles: Profile[];
  infoLinks?: InfoLink6[];
  "#text": string;
  type: string;
  name: string;
  hidden: boolean;
  id: string;
  collective?: boolean;
  costs?: Cost5[];
  constraints?: Constraint[];
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

export interface EntryLink3 {
  name: string;
  hidden: boolean;
  type: string;
  id: string;
  targetId: string;
}

export interface EntryLink4 {
  name: string;
  hidden: boolean;
  type: string;
  id: string;
  targetId: string;
  collective?: boolean;
  constraints?: Constraint[];
  "#text"?: string;
  modifiers?: Modifier[];
}

export interface InfoLink7 {
  id: string;
  name: string;
  hidden: boolean;
  targetId: string;
  type: string;
  modifiers?: Modifier[];
  "#text"?: string;
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
  conditions?: Condition[];
  "#text"?: string;
  conditionGroups?: ConditionGroup4[];
  repeats?: Repeat2[];
}

export interface ConditionGroup4 {
  conditions: Condition[];
  "#text": string;
  type: string;
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

export interface SelectionEntryGroup4 {
  constraints: Constraint[];
  selectionEntries: SelectionEntry7[];
  modifiers: Modifier9[];
  "#text": string;
  name: string;
  hidden: boolean;
  id: string;
}

export interface SelectionEntry7 {
  entryLinks: EntryLink5[];
  selectionEntries: SelectionEntry8[];
  constraints: Constraint[];
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
  profiles: Profile[];
  constraints: Constraint[];
  "#text": string;
  type: string;
  name: string;
  hidden: boolean;
  id: string;
  collective: boolean;
  infoLinks?: InfoLink8[];
}

export interface Characteristic8 {
  "#text": string;
  name: string;
  typeId: string;
}

export interface InfoLink8 {
  name: string;
  hidden: boolean;
  type: string;
  id: string;
  targetId: string;
}

export interface InfoLink9 {
  name: string;
  hidden: boolean;
  type: string;
  id: string;
  targetId: string;
}

export interface Modifier9 {
  conditions: Condition[];
  "#text": string;
  type: string;
  value: number;
  field: string;
  id: string;
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
  constraints?: Constraint[];
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
  constraints?: Constraint[];
  "#text"?: string;
  modifiers?: Modifier12[];
}

export interface ConditionGroup7 {
  conditionGroups: ConditionGroup8[];
  conditions: Condition[];
  "#text": string;
  type: string;
}

export interface ConditionGroup8 {
  conditions: Condition[];
  "#text": string;
  type: string;
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
  constraints?: Constraint[];
  profiles?: Profile[];
  collective?: boolean;
}

export interface ConditionGroup9 {
  conditions: Condition[];
  "#text": string;
  type: string;
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
  conditions: Condition[];
  "#text": string;
  type: string;
  value: boolean;
  field: string;
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
