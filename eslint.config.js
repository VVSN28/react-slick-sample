export default [
    {
        ignores: [
            "node_modules/*"
        ]
    },
    {
        files: ["**/*.jsx"],
        rules: {
            "semi": "error",
            "no-unused-vars": "error"
        }
    }
];