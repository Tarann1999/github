import { createAction, props } from "@ngrx/store"

export const updateRepoInformation = createAction('[Repo] Update',
    props<any>()
)