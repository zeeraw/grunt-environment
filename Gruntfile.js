module.exports = function(grunt) {

  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["watch"]);

  grunt.initConfig({

    pkg: grunt.file.readJSON("package.json"),

    sass: {
      dist: {
        options: {
          style: "expanded"
        },
        files: {
          "./build/style/main.css": "./src/style/main.scss"
        }
      }
    },

    uglify: {
      build: {
        src: "src/script/main.js",
        dest: "build/script/main.min.js"
      }
    },

    watch: {
      css: {
        files: [
          "**/*.sass",
          "**/*.scss"
        ],
        tasks: ["sass"],
        options: {
          livereload: true
        },
      },
    },

  });

}