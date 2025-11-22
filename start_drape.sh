#!/bin/bash

ROOT="/Users/abhishekpadhi/Documents/projects/fullstack/fullstack/drape"

BACKEND_CMD="cd $ROOT/backend && npm run dev"
FRONTEND_CMD="cd $ROOT/frontend && npm run dev"
LAZYGIT_CMD="cd $ROOT && lazygit"

osascript <<EOF
tell application "iTerm2"
    activate

    -- Use EXISTING window if available
    if (count of windows) = 0 then
        set win to (create window with profile "Default")
    else
        set win to current window
    end if

    ------------------------------------------------------------------------
    -- TAB 1 - Pane 1 (Backend)
    ------------------------------------------------------------------------
    -- Create a new tab inside the existing window
    tell win
        create tab with profile "Default"
    end tell

    set backendPane to current session of win
    tell backendPane
        write text "zsh -i -c \"$BACKEND_CMD\""
    end tell

    ------------------------------------------------------------------------
    -- TAB 1 - Pane 2 (Frontend)
    ------------------------------------------------------------------------
    set pane2 to (split vertically of backendPane with profile "Default")
    tell pane2
        write text "zsh -i -c \"$FRONTEND_CMD\""
    end tell

    ------------------------------------------------------------------------
    -- TAB 2 - Lazygit
    ------------------------------------------------------------------------
    tell win
        create tab with profile "Default"
    end tell

    tell current session of win
        write text "zsh -i -c \"$LAZYGIT_CMD\""
    end tell

end tell
EOF
