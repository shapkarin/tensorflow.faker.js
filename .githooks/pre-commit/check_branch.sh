function get_branch_name {
    echo "$( git rev-parse --abbrev-ref HEAD )"
}

function is_special_branch {
    local branch="$1"
    echo "${branch}" | grep -i "^\(master\|\|HEAD\)" 1>/dev/null 2>&1
    return $?
}

function lint_branch_name {
    local branch="$( get_branch_name )"

    if is_special_branch "${branch}"
    then
        echo "You can't commit to master. Please, use other branch."
        exit 1
    fi
}


lint_branch_name