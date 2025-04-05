import { useEffect, useMemo, useState } from "react";

// type AuditLog = {
//   id: string;
//   action?: string;
//   createdAt?: string;
//   actor?: string;
// };

export default function AuditLogs() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(false);
  const [selectedAction, setSelectedAction] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await fetch("https://67f00fb52a80b06b8896c3bf.mockapi.io/api/v1/audit_logs");
        const data = await res.json();
        setLogs(data);
      } catch (err) {
        console.error("Error fetching logs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchLogs();
  }, []);

  const uniqueActions = useMemo(() => [...new Set(logs.map((l) => l.action).filter(Boolean))], [logs]);
  const uniqueUsers = useMemo(() => [...new Set(logs.map((l) => l.actor).filter(Boolean))], [logs]);

  const filteredLogs = useMemo(() => {
    let result = [...logs];

    if (selectedAction) {
      result = result.filter((log) => log.action === selectedAction);
    }

    if (selectedUser) {
      result = result.filter((log) => log.actor === selectedUser);
    }

    if (search.trim()) {
      const keyword = search.toLowerCase();
      result = result.filter(
        (log) =>
          log.action?.toLowerCase().includes(keyword) ||
          log.actor?.toLowerCase().includes(keyword) ||
          log.id?.toLowerCase().includes(keyword)
      );
    }

    result.sort((a, b) => {
      const dateA = new Date(a.createdAt ?? "").getTime();
      const dateB = new Date(b.createdAt ?? "").getTime();
      return sortAsc ? dateA - dateB : dateB - dateA;
    });

    return result;
  }, [logs, search, sortAsc, selectedAction, selectedUser]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Audit Logs</h1>

      <div className="flex flex-wrap gap-4 mb-4 items-center">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-2 border rounded w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="px-3 py-2 border rounded"
          value={selectedAction}
          onChange={(e) => setSelectedAction(e.target.value)}
        >
          <option value="">All Actions</option>
          {uniqueActions.map((action) => (
            <option key={action} value={action}>
              {action}
            </option>
          ))}
        </select>

        <select
          className="px-3 py-2 border rounded"
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          <option value="">All Users</option>
          {uniqueUsers.map((user) => (
            <option key={user} value={user}>
              {user}
            </option>
          ))}
        </select>

        <button
          className="ml-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => setSortAsc(!sortAsc)}
        >
          Sort by Timestamp {sortAsc ? "↑" : "↓"}
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : filteredLogs.length === 0 ? (
        <p className="text-gray-500">No logs found.</p>
      ) : (
        <div className="overflow-x-auto max-h-[70vh]">
          <table className="min-w-full bg-white border rounded shadow text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border-b text-left">ID</th>
                <th className="px-4 py-2 border-b text-left">Action</th>
                <th className="px-4 py-2 border-b text-left">Actor</th>
                <th className="px-4 py-2 border-b text-left">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b truncate max-w-[150px]">{log.id ?? "N/A"}</td>
                  <td className="px-4 py-2 border-b truncate max-w-[200px]">{log.action || "Unknown Action"}</td>
                  <td className="px-4 py-2 border-b">{log.actor || "Anonymous"}</td>
                  <td className="px-4 py-2 border-b">
                    {log.createdAt ? new Date(log.createdAt).toLocaleString() : "Invalid Timestamp"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
