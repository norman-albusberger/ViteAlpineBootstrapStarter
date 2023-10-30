export function profileData() {
    return {
        editMode: false,
        user: {
            name: 'John Doe',
            bio: 'A brief bio about John Doe.'
        },
        posts: [
            { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
            // ... More posts
        ],
        updateProfile() {
            // Typically, you'd make an AJAX call to update the user profile.
            this.editMode = false;
        }
    };
}