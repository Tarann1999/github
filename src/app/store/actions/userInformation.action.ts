import { createAction, props } from "@ngrx/store"

export const updateUserInformation = createAction('[User] Update',
    props<any>()
)