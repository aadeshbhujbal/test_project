import { FC } from "react";
import { observer } from "mobx-react-lite";
// components
import { HeaderGroupByCard } from "./group-by-card";
import { Icon } from "./state-group";
import { EProjectStore } from "store/command-palette.store";
import { IIssue } from "types";

export interface IStateHeader {
  column_id: string;
  column_value: any;
  issues_count: number;
  disableIssueCreation?: boolean;
  currentStore: EProjectStore;
  addIssuesToView?: (issueIds: string[]) => Promise<IIssue>;
}

export const StateHeader: FC<IStateHeader> = observer((props) => {
  const { column_value, issues_count, disableIssueCreation, currentStore, addIssuesToView } = props;

  const state = column_value ?? null;

  return (
    <>
      {state && (
        <HeaderGroupByCard
          icon={<Icon stateGroup={state?.group} color={state?.color} />}
          title={state?.name || ""}
          count={issues_count}
          issuePayload={{ state: state?.id }}
          disableIssueCreation={disableIssueCreation}
          currentStore={currentStore}
          addIssuesToView={addIssuesToView}
        />
      )}
    </>
  );
});
