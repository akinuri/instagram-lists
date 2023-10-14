function igUser(user) {
    return `
        <div class="bg-slate-200 px-2 py-1 pr-4 rounded hover:bg-slate-300/60 flex gap-2 items-center">
            <span class="rounded-full min-w-[2rem] aspect-square bg-slate-300"></span>
            <div class="flex flex-col items-start">
                <a
                    href="https://instagram.com/${user.username}"
                    target="_blank"
                    rel="noreferrer"
                    class="underline underline-offset-1 decoration-dotted decoration-slate-500 hover:decoration-solid"
                    >
                    ${user.username}
                </a>
                <span class="opacity-50">${user.full_name}</span>
            </div>
        </div>
    `;
}