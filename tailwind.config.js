/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:process.env.TAILWIND_MODE ? 'jit' :'',
  purge:['./src/**/*.{ts,html}'],
  content: [],
  theme: {
    extend: {},
    container: {
      center:true,
    },
    colors:{
      'primary':'#0959ab'
    }
  },
  plugins: [],
}
