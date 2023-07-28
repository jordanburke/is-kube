import fs from "node:fs"

let isKubeCached: boolean

const hasKubeCGroup = () => {
  try {
    return fs.readFileSync("/proc/self/cgroup", "utf8").includes("kube")
  } catch {
    return false
  }
}

const isKubernetes = () => {
  isKubeCached ??= hasKubeCGroup()
  return isKubeCached
}

export default isKubernetes
